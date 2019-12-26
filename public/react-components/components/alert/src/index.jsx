import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.props.register && this.props.register(this);
  }

  // 获得当前层级
  getZIndex() {
    return this.props.zIndex || Popper.addZIndex();
  }

  // 展示
  show() {
    this.setState({
      isShow: true
    });
  }

  // 隐藏
  hide() {
    this.setState({
      isShow: false
    });
  }

  // 点击关闭
  onClose(event) {
    this.props.onClose && this.props.onClose(event);
    this.props.isClosable && this.hide();
  }

  render() {

    return (
      <div
        className={this.className("v-alert", this.state.isShow ? 'v-shown' : 'v-hidden')}
        style={{...this.style(), zIndex: this.getZIndex()}}
      >
        <div
          className={`
            v-alert-part
            v-${this.props.type}
            ${this.props.isPlain && 'v-isPlain' || ''}
            ${this.props.isTextCenter && 'v-isCenter' || ''}
          `}
          style={{
            textAlign: this.props.isTextCenter ? 'center' : 'left'
          }}
        >

          {
            this.props.isShowIcon &&
            <div className="icon">
              {this.props.type === 'success' && <i className="iconfont icon-success"/>}
              {this.props.type === 'error' && <i className="iconfont icon-error"/>}
              {this.props.type === 'warning' && <i className="iconfont icon-warning"/>}
              {this.props.type === 'tip' && <i className="iconfont icon-tip"/>}
            </div>
          }

          <div className="v-content">
            <div className="v-contentTitle">
              {
                this.props.titleText ?
                  <div>{this.props.titleText}</div> :
                  <div>{this.props.titleComponent}</div>
              }
            </div>
            <div className="v-contentDescription">
              {
                this.props.descriptionText ?
                  <div>{this.props.descriptionText}</div> :
                  <div>{this.props.descriptionComponent}</div>
              }
            </div>
          </div>

          <div className="v-close">
            {
              this.props.closeComponent ?
                <div onClick={this.onClose.bind(this)}/> :
                this.props.closeText ?
                  <div onClick={this.onClose.bind(this)}>{this.props.closeText}</div> :
                  <div onClick={this.onClose.bind(this)}>×</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

Alert.defaultProps = {
  type: 'tip',
  isPlain: true,
  isClosable: true,
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'tip', 'error']), // 不同类型对应不同颜色
  isPlain: PropTypes.bool,                                       // 展示的淡雅的颜色
  isClosable: PropTypes.bool,                                    // 点击关闭按钮是否关闭
  isShowIcon: PropTypes.bool,                                    // 是否展示图标
  isTextCenter: PropTypes.bool,                                  // 是否居中展示
  zIndex: PropTypes.number,                                      // 层级
  titleText: PropTypes.string,                                   // 标题文字
  descriptionText: PropTypes.string,                             // 描述文字
  closeText: PropTypes.string,                                   // 关闭文字
  titleComponent: PropTypes.node,                                // 标题插槽
  descriptionComponent: PropTypes.node,                          // 描述插槽
  closeComponent: PropTypes.node,                                // 关闭插槽

  onClose: PropTypes.func,                                       // 点击关闭时触发
  register: PropTypes.func,                                      // 注册实例组件
};

export default Alert;
