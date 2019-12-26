import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Checkbox extends Component {

  static elementName = 'Checkbox';

  constructor(props) {
    super(props);
    this.state = {
      // 只有存在 isIndeterminate时才作为受控组件
      isChecked: this.props.isChecked,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isChecked !== state.prevPropsIsChecked) {
      return {
        prevPropsIsChecked: props.isChecked,
        isChecked: props.isChecked
      };
    }
    return null;
  }

  // 当前是否为被选中内容
  getIsCheckedValue() {
    if (this.props.parent && this.props.parent.hasParent) {
      return this.props.parent.isChecked;
    } else {
      return !this.props.isIndeterminate && this.state.isChecked;
    }
  }

  // 是否展示边界
  getHasOutBorder() {
    return this.props.parent && this.props.parent.hasOutBorder || this.props.hasOutBorder || false;
  }

  // 是否禁止操作
  getIsDisabled() {
    return this.props.parent && this.props.parent.isDisabled || this.props.isDisabled || false;
  }

  // 切换选中
  toggle(event) {

    if (this.getIsDisabled()) {
      return;
    }

    if (this.props.isIndeterminate) {
      // 部分选中的情况
      this.props.onPartCheckChange && this.props.onPartCheckChange(event);
    }
    else if (this.props.parent && this.props.parent.hasParent) {
      // 有父元素的情况
      this.props.parent.change(this.props.value);
    }
    else {
      // 无父元素，并且非部分选中的情况
      let currentChecked = !this.state.isChecked;
      this.setState({
        isChecked: currentChecked
      });
      this.props.onChange && this.props.onChange(currentChecked, event);
    }
  }

  render() {

    return (
      <span
        className={this.className(
          'v-checkbox',
          {
            'v-outBorder': this.getHasOutBorder(),
            'v-disabled': this.getIsDisabled(),
            'v-checked': this.getIsCheckedValue(),
            'v-notAll': this.props.isIndeterminate
          }
        )}
        style={this.style()}
        onClick={event => this.toggle(event)}
      >
        <i className="v-checkbox-icon"/>
        <span className="v-checkbox-content">&nbsp;{this.props.label}</span>
      </span>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),                                // 选中时上传的内容
  hasOutBorder: PropTypes.bool,      // 每个小选项是否展示边框
  label: PropTypes.string,           // 展示的内容
  isDisabled: PropTypes.bool,        // 禁止操作
  isIndeterminate: PropTypes.bool,   // 是否部分选中
  isChecked: PropTypes.bool,         // 是否被选中

  onChange: PropTypes.func,          // 点击选中与不选中时触发
  onPartCheckChange: PropTypes.func, // 部分选中回调

  parent: PropTypes.shape({          // 外层元素传入的值
    value: PropTypes.array,
    hasParent: PropTypes.bool,
    isDisabled: PropTypes.bool,
    hasOutBorder: PropTypes.bool,
    change: PropTypes.func,
  }),
};

export default Checkbox;
