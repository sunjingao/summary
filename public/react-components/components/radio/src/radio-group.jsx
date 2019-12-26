import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';

class RadioGroup extends Component {

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

  // 改变选中内容
  onChange(value) {
    this.setState({value});
    this.props.onChange && this.props.onChange(value);
  }

  render() {

    let children = React.Children.map(
      this.props.children,
      child => {
        if (
          !React.isValidElement(child) ||
          !['Radio', 'RadioButton'].includes(child.type.elementName)
        ) {
          return null;
        }

        return React.cloneElement(
          child,
          {
            parent: {
              value: this.state.value,
              isDisabled: this.props.isDisabled,
              hasOutBorder: this.props.hasOutBorder,
              onChange: this.onChange.bind(this),
            }
          }
        );
      }
    );

    return (
      <div className={this.className('v-radio-group')} style={this.style()}>
        {children}
      </div>
    )
  }
}

RadioGroup.propTypes = {
  value: PropTypes.string,      // 需要展示选中状态的值
  isDisabled: PropTypes.bool,   // 禁止选中
  hasOutBorder: PropTypes.bool, // 每个小选项是否展示边框
};

export default RadioGroup;
