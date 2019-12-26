import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Tooltip extends Component {

  constructor(props) {

    super(props);

    this.params = {
      popperHandler: null,
    };

    this.ref = {
      reference: React.createRef(),
      popper: React.createRef(),
    };
  }

  componentDidMount() {

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

    this.hide();
  }

  componentDidUpdate() {
    if (this.props.isDisabled) {
      this.hide();
    }
  }

  // 展示popper
  show() {
    this.params.popperHandler.show();
  }

  // 隐藏popper
  hide() {
    this.params.popperHandler.hide();
  }

  // 鼠标进入区域
  onMouseEnter() {
    if (this.props.isDisabled) {
      return;
    }
    this.show();
  }

  // 鼠标离开区域
  onMouseLeave() {
    if (this.props.isDisabled) {
      return;
    }
    this.hide();
  }

  render() {

    return (
      <div
        ref={this.ref.reference}
        className={this.className('v-tooltip')}
        style={this.style()}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >

        {this.props.children}

        <div ref={this.ref.popper} className={`v-popper v-${this.props.theme}`}>

          <div className="v-popper-content">
            {this.props.popperComponent ? this.props.popperComponent : this.props.content}
          </div>

          <div className="v-popper-arrow"/>
        </div>

      </div>
    );
  }
}

Tooltip.defaultProps = {
  placement: 'bottom',
  theme: 'light',
  offset: 10,
};

Tooltip.propTypes = {
  isDisabled: PropTypes.bool,                // 不显示popper
  placement: PropTypes.string,               // popper位置
  content: PropTypes.string,                 // 提示内容
  offset: PropTypes.number,                  // 偏移量
  theme: PropTypes.oneOf(['dark', 'light']), // 主题
  popperComponent: PropTypes.node,           // popper展示内容插槽
};

export default Tooltip;
