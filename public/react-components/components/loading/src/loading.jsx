import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Loading extends Component {

  constructor(props) {
    super(props);
    this.ref = {
      root: React.createRef(),
    };
  }

  // 因为需要将 ref 传递给外层，所以需要在这个生命周期中向上传递
  componentDidMount() {
    this.props.register && this.props.register(this, this.ref.root.current);
  }

  render() {

    return (
      <div
        ref={this.ref.root}
        className={this.className('v-loading', this.props.loadingClass)}
        style={{...this.style(), zIndex: this.props.zIndex, opacity: this.props.opacity}}
      >
        <div className={`v-content ${this.props.contentClass || ''}`} style={{zIndex: this.props.zIndex + 1}}>
          {this.props.isShowLoadingIcon && <i className="iconfont icon-loading v-loading-img"/>}
          {this.props.text && <div className="v-text" dangerouslySetInnerHTML={{__html: this.props.text}}/>}
          {this.props.loadingComponent}
        </div>
      </div>
    )
  }
}

Loading.propTypes = {
  opacity: PropTypes.number,         // 透明度
  isShowLoadingIcon: PropTypes.bool, // 是否展示loading图标
  zIndex: PropTypes.number,          // zIndex层级
  text: PropTypes.string,            // 文字

  loadingClass: PropTypes.string,    // loading样式
  contentClass: PropTypes.string,    // content区域样式
  loadingComponent: PropTypes.node,  // 自定义组件名称

  register: PropTypes.func,          // 注册实例及dom
};

export default Loading;
