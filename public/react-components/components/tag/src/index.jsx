import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Tag extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  getWidth() {
    return typeof this.props.width === 'number' ? `${this.props.width}px` : this.props.width;
  }

  getHeight() {
    return typeof this.props.height === 'number' ? `${this.props.height}px` : this.props.height;
  }

  // 展示tag
  show() {
    this.setState({
      isShow: true
    });
  }

  // 隐藏tag
  hide() {
    this.setState({
      isShow: false
    });
  }

  // 点击关闭时触发
  onClose(event) {
    this.hide();
    this.props.onClose && this.props.onClose(event);
  }

  render() {

    let width = this.getWidth(), height = this.getHeight();

    return (
      <span
        className={this.className(
          'v-tag',
          `v-${this.props.type}`,
          this.state.isShow ? 'v-show' : 'v-hide',
        )}
        style={{
          ...this.style(),
          width: width,
          height: height,
          lineHeight: height,
        }}
      >
        {this.props.childValue}
        {
          this.props.isCloseable &&
          <i className="iconfont icon-delete v-delete" onClick={this.onClose.bind(this)}/>
        }
      </span>
    );
  }
}

Tag.defaultProps = {
  type: 'default',
  width: 'auto',
  height: 32,
};

Tag.propTypes = {
  type: PropTypes.string,                                            // 类型
  isCloseable: PropTypes.bool,                                       // 是否显示删除按钮
  childValue: PropTypes.string,                                      // 展示的值
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),  // 宽度
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 高度

  onClose: PropTypes.func,                                           // 关闭时触发的函数
};

export default Tag;
