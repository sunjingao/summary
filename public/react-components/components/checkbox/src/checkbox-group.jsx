import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class CheckboxGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
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

  // 改变选中时上传数据,供后代元素进行判断
  change(value) {

    let stateValue = this.state.value;

    stateValue.includes(value) ? stateValue.splice(stateValue.indexOf(value), 1) : stateValue.push(value);

    this.setState({
      value: stateValue
    });
    this.props.onChange && this.props.onChange(stateValue);
  }

  render() {

    let children = React.Children.map(
      this.props.children,
      item => {
        if (
          !React.isValidElement(item) ||
          !['Checkbox', 'CheckboxButton'].includes(item.type.elementName)
        ) {
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              hasParent: true,
              isChecked: this.state.value.includes(item.props.value),
              isDisabled: this.props.isDisabled,
              hasOutBorder: this.props.hasOutBorder,
              change: this.change.bind(this),
            }
          }
        )
      }
    );

    return (
      <div className={this.className('v-checkbox-group')} style={this.style()}>
        {children}
      </div>
    )
  }
}

CheckboxGroup.defaultProps = {
  value: [],
};

CheckboxGroup.propTypes = {
  value: PropTypes.array,       // 值（将在选中时返回）
  isDisabled: PropTypes.bool,   // 是否禁止操作
  hasOutBorder: PropTypes.bool, // 是否展示边框

  onChange: PropTypes.func,     // 点击选中与不选中时触发
};

export default CheckboxGroup;
