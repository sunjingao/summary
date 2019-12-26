import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import Button from '../../button/index';
import clickoutside from '../../../src/utils/clickoutside';

class Dropdown extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isShowPopper: false, // 当前是否在展示popper
    };

    this.params = {
      popperHandler: null, // popper实例
      hideTimer: null,     // popper延时隐藏的句柄
      hideTimeout: 200,    // 因为下拉框和展示部分之间有一段距离，需要用延时来实现下拉框不隐藏的效果
    };

    this.ref = {
      root: React.createRef(),
      reference: React.createRef(),
      popper: React.createRef(),
    };
  }

  componentDidMount() {

    clickoutside.bind(this.ref.root.current, (sign, event) => this.clickOutside(sign, event));

    this.params.popperHandler = new Popper(
      this.ref.reference.current,
      this.ref.popper.current,
      {
        placement: this.props.placement,
        modifiers: {
          // 设置输入框和弹层之间的距离
          offset: {
            offset: [0, 10]
          }
        }
      }
    );
  }

  componentWillUnmount() {
    clickoutside.unbind(this.ref.root.current);
    this.params.popperHandler.destroy();
  }

  // 展示popper
  showPopper() {
    this.params.popperHandler.show();
    this.setState({
      isShowPopper: true
    });
  }

  // 隐藏popper
  hidePopper() {
    this.params.popperHandler.hide();
    this.setState({
      isShowPopper: false
    });
  }

  // clickOutside
  clickOutside(sign, event) {

    if (!sign || this.props.isHoverTrigger || !this.props.isHideOnClick) {
      return;
    }
    this.hidePopper();
  }

  // dropdown-item触发了点击事件
  onCommand(val, event) {

    if (this.props.isHideOnClick) {
      this.hidePopper();
    }

    this.props.onCommand && this.props.onCommand(val, event);
  }

  // reference 上的点击事件
  onReferenceClick() {

    if (this.props.isHoverTrigger) {
      return;
    }

    if (this.props.isHideOnClick) {
      this.state.isShowPopper ? this.hidePopper() : this.showPopper();
    } else {
      this.showPopper();
    }
  }

  // isSplitButton 为 true 时，点击左侧按钮事件
  onSplitClick(event) {
    event.stopPropagation();
    this.props.onSplitClick && this.props.onSplitClick(event);
  }

  // 鼠标进入dropdown事件
  onMouseEnter() {

    if (!this.props.isHoverTrigger) {
      return;
    }

    clearTimeout(this.params.hideTimer);

    this.showPopper();
  }

  // 鼠标离开dropdown事件
  onMouseLeave() {

    if (!this.props.isHoverTrigger) {
      return;
    }

    this.params.hideTimer = setTimeout(
      _ => {
        this.hidePopper();
      },
      this.params.hideTimeout
    );
  }

  render() {

    return (
      <div
        ref={this.ref.root}
        className={this.className('v-dropdown')}
        style={this.style()}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        <div
          ref={this.ref.reference}
          className="reference"
          onClick={this.onReferenceClick.bind(this)}
        >
          {
            this.props.isSplitButton ?
              <Button.Group>
                <Button onClick={this.onSplitClick.bind(this)}>
                  {this.props.children}
                </Button>
                <Button className="split-right-button">
                  <i className="iconfont icon-down"/>
                </Button>
              </Button.Group> :
              this.props.children
          }
        </div>
        <div ref={this.ref.popper} className="v-popper">
          {
            React.cloneElement(
              this.props.dropdownComponent,
              {
                className: 'v-popper-content',
                onCommand: this.onCommand.bind(this)
              }
            )
          }
          <div className="v-popper-arrow"/>
        </div>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  isHideOnClick: true,
  placement: 'bottom-end',
};

Dropdown.propTypes = {
  isSplitButton: PropTypes.bool,     // 下拉触发元素呈现为按钮组
  isHoverTrigger: PropTypes.bool,    // 以hover方式触发下拉框展示
  isHideOnClick: PropTypes.bool,     // 点击时隐藏下拉框
  placement: PropTypes.string,       // 下拉框初始位置
  dropdownComponent: PropTypes.node, // dropdown插槽

  onSplitClick: PropTypes.func,      // isSplitButton 为 true 时，点击左侧按钮的回调
  onCommand: PropTypes.func,         // 选中item后回调
};

export default Dropdown;

