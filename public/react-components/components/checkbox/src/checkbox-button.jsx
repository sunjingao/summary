import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class CheckboxButton extends Component {

  static elementName = 'CheckboxButton';

  // 是否禁止操作
  getIsDisabled() {
    return this.props.parent.isDisabled || this.props.isDisabled || false;
  }

  // 切换选中
  toggle() {

    if (this.getIsDisabled()) {
      return;
    }

    this.props.parent.change && this.props.parent.change(this.props.value);
  }

  render() {

    return (
      <span
        className={this.className(
          "v-checkbox-button",
          {
            'v-disabled': this.getIsDisabled(),
            'v-checked': this.props.parent.isChecked,
          }
        )}
        style={this.style()}
        onClick={this.toggle.bind(this)}
      >
        <span className="v-checkbox-content">{this.props.label}</span>
      </span>
    )
  }
}

CheckboxButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,              // 选中时上传的内容
  label: PropTypes.string,    // 展示的内容
  isDisabled: PropTypes.bool, // 是否禁止操作

  parent: PropTypes.shape({   // 外层元素传入的值
    value: PropTypes.array,
    isChecked: PropTypes.bool,
    hasParent: PropTypes.bool,
    isDisabled: PropTypes.bool,
    hasOutBorder: PropTypes.bool,
    change: PropTypes.func,
  }),
};

export default CheckboxButton;
