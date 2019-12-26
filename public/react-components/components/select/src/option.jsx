import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Option extends Component {

  static elementName = 'Option';

  constructor(props) {
    super(props);
    this.initShowLabel();
  }

  // 是否为单选
  isParentSingle() {
    return this.props.parent.isSingle;
  }

  // 是否为激活状态
  isActive() {

    let componentValue = this.props.parent.showValue;

    return this.isParentSingle() && componentValue === this.props.value ||
      !this.isParentSingle() && componentValue.includes(this.props.value);
  }

  // 初始化时注册showLabel
  initShowLabel() {
    if (this.props.value === this.props.parent.showValue) {
      this.props.parent.setSelectedLabel(this.props.label);
    }
  }

  // 点击item
  onClickOption(event) {

    if (this.props.isDisabled) {
      return;
    }

    this.props.parent.setSelectedValue(this.props.value);
    this.props.parent.setSelectedLabel(this.props.label);

    this.props.parent.onClickOption(this.props.value, this.props.label, event);
  }

  // 获取展示的children内容
  renderChildren() {

    let children = this.props.label;

    if (this.props.template) {
      children = React.cloneElement(
        this.props.template,
        {
          label: this.props.label,
          value: this.props.value,
        }
      )
    }

    return children;
  }

  render() {

    return (
      <li
        className={this.className(
          'v-option',
          this.isActive() && 'v-active' || '',
          this.props.isDisabled && 'v-disabled' || ''
        )}
        style={this.style()}
        onClick={this.onClickOption.bind(this)}
      >
        {this.renderChildren()}
      </li>
    );
  }
}

Option.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDisabled: PropTypes.bool,
  template: PropTypes.node,
  parent: PropTypes.shape({           // 外层元素传入的值
    isSingle: PropTypes.bool,
    showValue: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    setSelectedValue: PropTypes.func,
    setSelectedLabel: PropTypes.func,
    onClickOption: PropTypes.func,
  }),
};

export default Option;
