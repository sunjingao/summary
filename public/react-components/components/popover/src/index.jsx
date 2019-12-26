import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import clickoutside from '../../../src/utils/clickoutside';

class Popover extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isShow: false,
    };

    this.params = {
      // popper 句柄
      popperHandler: null,
      // 关闭延时
      hideTimeout: 200,
      // 关闭句柄
      hideTimer: null,
      // 所有的事件
      triggerType: {hover: 'hover', focus: 'focus', click: 'click', manual: 'manual'},
    };

    this.ref = {
      reference: React.createRef(),
      popper: React.createRef()
    };
  }

  componentDidMount() {

    clickoutside.bind(this.ref.reference.current, sign => this.onClickOutside(sign));

    this.params.popperHandler = new Popper(
      this.ref.reference.current,
      this.ref.popper.current,
      {
        updateImmediately: false,
        placement: this.props.placement,
        modifiers: {
          // 设置输入框和弹层之间的距离
          offset: {
            offset: [0, 10]
          }
        }
      }
    );

    this.hide(true);
  }

  componentWillUnmount() {
    clickoutside.unbind(this.ref.reference.current);
    this.params.popperHandler.destroy();
  }

  // 展示popper
  show() {

    clearTimeout(this.params.hideTimer);

    if (this.props.isDisabled || this.state.isShow) {
      return;
    }

    this.setState({isShow: true});

    this.params.popperHandler.show();
  }

  // 隐藏popper。immediate: 是否立即改变
  hide(immediate = false) {

    if (immediate) {
      this.setState({isShow: false});
      this.params.popperHandler.hide();
    }
    else {
      if (this.props.isDisabled || !this.state.isShow) {
        return;
      }

      this.params.hideTimer = setTimeout(
        _ => {
          this.setState({
            isShow: false
          });
          this.params.popperHandler.hide();
        },
        this.params.hideTimeout
      );
    }
  }

  // 鼠标进入范围
  onMouseEnter() {

    if (this.props.trigger !== this.params.triggerType.hover) {
      return;
    }
    this.show();
  }

  // 鼠标离开范围
  onMouseLeave() {

    if (this.props.trigger !== this.params.triggerType.hover) {
      return;
    }
    this.hide();
  }

  // 按下鼠标
  onMouseDown() {

    if (this.props.trigger !== this.params.triggerType.focus) {
      return;
    }
    this.show();
  }

  // 抬起鼠标
  onMouseUp() {

    if (this.props.trigger !== this.params.triggerType.focus) {
      return;
    }
    this.hide();
  }

  // 鼠标点击
  onClick() {

    if (!['click', 'manual'].includes(this.props.trigger)) {
      return;
    }
    this.state.isShow ? this.hide() : this.show();
  }

  // 点击事件处理
  onClickOutside(sign) {

    if (this.props.trigger !== this.params.triggerType.click) {
      return;
    }

    if (sign) {
      this.hide();
    }
  }

  render() {

    return (
      <div
        ref={this.ref.reference}
        className={this.className('v-popover')}
        style={this.style()}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        onMouseDown={this.onMouseDown.bind(this)}
        onMouseUp={this.onMouseUp.bind(this)}
        onClick={this.onClick.bind(this)}
      >

        {this.props.children}

        <div
          ref={this.ref.popper}
          className={`v-popper v-${this.props.theme}`}
          onClick={event => event.stopPropagation()}
        >
          <div className="v-popper-content">
            {
              this.props.popperComponent ?
                this.props.popperComponent : this.props.contentText
            }
          </div>

          <div className="v-popper-arrow"/>
        </div>
      </div>
    );
  }
}

Popover.defaultProps = {
  placement: 'bottom',
  theme: 'light',
  offset: 10,
  trigger: 'hover',
};

Popover.propTypes = {
  isDisabled: PropTypes.bool,      // 禁止展示
  placement: PropTypes.string,     // popper位置
  contentText: PropTypes.string,   // popper内容
  theme: PropTypes.string,         // popper主题
  offset: PropTypes.number,        // popper偏移量
  trigger: PropTypes.string,       // 触发方式
  popperComponent: PropTypes.node, // popper自定义组件
};

export default Popover;
