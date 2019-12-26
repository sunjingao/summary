import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class RadioButton extends Component {

  static elementName = 'RadioButton';

  // 是否禁止操作
  isShowDisabled() {
    return this.props.parent.isDisabled || this.props.isDisabled;
  }

  // 当前部分是否选中
  isCheckedValue() {
    return this.props.parent.value === this.props.value;
  }

  // 改变选中项
  onChange() {

    if (this.isShowDisabled()) {
      return;
    }

    if (this.props.parent.value !== this.props.value) {
      this.props.parent.onChange(this.props.value);
    }
  }

  render() {
    return (
      <span
        className={this.className(
          'v-radio-button',
          this.isShowDisabled() && 'v-disabled' || '',
          this.isCheckedValue() && 'v-checked' || ''
        )}
        style={this.style()}
        onClick={this.onChange.bind(this)}
      >
        <i className={'v-radio-icon'}/>
        <span className={'v-radio-content'}>&nbsp;{this.props.label}</span>
      </span>
    );
  }
}

RadioButton.propTypes = {

  label: PropTypes.string.isRequired, // 要展示的内容
  value: PropTypes.string.isRequired, // 值（将在选中时返回）
  isDisabled: PropTypes.bool,         // 禁止选中

  parent: PropTypes.shape({           // 外层元素传入的值
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    hasOutBorder: PropTypes.bool,
    onChange: PropTypes.func,
  }),
};

export default RadioButton;
