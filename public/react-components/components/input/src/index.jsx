import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

const KEYCODE = {
  ENTER: 13
};

class Input extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isFocus: false,    // 用于判断最外部边框是否聚焦
      value: props.value, // 展示的内容
    };

    this.ref = {
      inputContent: React.createRef(), // input 输入框
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.prevPropsValue) {
      return {
        prevPropsValue: props.value,
        value: props.value
      };
    }
    return null;
  }

  // 暴露给外面的方法 选中
  selectHandle() {
    this.ref.inputContent.current.select();
  }

  // 暴露给外面的方法 聚焦
  focusHandle() {
    this.ref.inputContent.current.focus();
    this.setState({isFocus: true});
  }

  // 暴露给外面的方法 脱离焦点
  blurHandle() {
    this.ref.inputContent.current.blur();
  }

  // 暴露给外面的方法 清空内容
  clearHandle() {
    this.focusHandle();
    this.setState({value: ''});
  }

  // 暴露给外面的方法 重置内容
  resetValueHandle(value) {
    this.setState({
      value: value,
    });
  }

  // 聚焦时触发
  onFocus(event) {
    this.setState({isFocus: true});
    this.props.onFocus && this.props.onFocus(event);
  }

  // 失去焦点时触发
  onBlur(event) {
    this.setState({isFocus: false});
    this.props.onBlur && this.props.onBlur(event);
  }

  // 内容改变时触发
  onChange(value) {
    this.setState({value: value});
    this.props.onChange && this.props.onChange(value);
  }

  // 点击时触发
  onClick(event) {
    this.props.onClick && this.props.onClick(event);
  }

  // 清除内容时触发
  onClear(event) {
    this.focusHandle();
    this.setState({value: ''});
    this.props.onClear && this.props.onClear(event);
  }

  // 监听按键事件
  onKeyDown(event) {
    if (this.props.isEnableEnter && event.keyCode === KEYCODE.ENTER) {
      this.props.onEnter && this.props.onEnter(event);
      return;
    }
  }

  render() {

    return (
      <div
        className={this.className(
          'v-input',
          this.state.isFocus && 'v-focus' || '',
          this.state.isDisabled && 'v-disabled' || ''
        )}
        style={{
          ...this.style(),
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
        onClick={this.onClick.bind(this)}
      >

        {
          this.props.frontComponent &&
          <div className="v-input-front">{this.props.frontComponent}</div>
        }

        <input
          ref={this.ref.inputContent}
          className={`v-input-content ${this.props.isDisabled && 'v-disabled' || ''}`}
          style={{fontSize: this.props.fz, textAlign: this.props.textAlign}}
          value={this.state.value}
          disabled={this.props.isDisabled}
          readOnly={this.props.readonly && 'readonly'}
          placeholder={this.props.placeholder}
          onChange={event => this.onChange(event.target.value)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
        />

        {this.props.Children}

        {
          this.props.isCleanable &&
          <i
            className={`iconfont icon-delete v-icon-clear ${!this.state.value && 'v-hidden' || ''}`}
            onClick={this.onClear.bind(this)}
          />
        }

        {
          this.props.behindComponent &&
          <div className="v-input-front">{this.props.behindComponent}</div>
        }

      </div>
    )
  }
}

Input.defaultProps = {
  value: '',
  width: 180,
  height: 40,
  fz: '.85rem',
  textAlign: 'left',
};

Input.propTypes = {
  value: PropTypes.oneOfType(
    [
      PropTypes.number,
      PropTypes.string
    ]
  ),                               // 默认展示内容
  width: PropTypes.number,         // 组件宽度
  height: PropTypes.number,        // 组件高度
  fz: PropTypes.string,            // 输入框的字体大小
  isDisabled: PropTypes.bool,      // 是否禁用状态
  isCleanable: PropTypes.bool,     // 是否清空输入框
  isEnableEnter: PropTypes.bool,   // 开启回车事件
  textAlign: PropTypes.string,     // 是否居中
  readonly: PropTypes.bool,        // 是否只读

  frontComponent: PropTypes.node,  // 前置组件
  behindComponent: PropTypes.node, // 后置组件

  clearHandle: PropTypes.func,     // 清空内容
  selectHandle: PropTypes.func,    // 选中
  focusHandle: PropTypes.func,     // 聚焦
  blurHandle: PropTypes.func,      // 脱离焦点

  onClick: PropTypes.func,         // 点击时触发
  onClear: PropTypes.func,         // 清空时触发
  onChange: PropTypes.func,        // 值改变时触发
};

export default Input;

