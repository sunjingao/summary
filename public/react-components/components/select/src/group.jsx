import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class OptionGroup extends Component {

  static elementName = 'OptionGroup';

  render() {

    let child = React.Children.map(
      this.props.children,
      item => {

        if(!React.isValidElement(item) || item.type.elementName !== 'Option'){
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: this.props.parent
          }
        )
      }
    );

    return (
      <div className={this.className('v-select-group')} style={this.style()}>
        <div className={"v-select-group-title"}>{this.props.label}</div>
        {child}
      </div>
    );
  }
}

OptionGroup.propTypes = {
  label: PropTypes.string,
  parent: PropTypes.shape({           // 外层元素传入的值
    isSingle: PropTypes.bool,
    showValue: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    setSelectedValue: PropTypes.func,
    setSelectedLabel: PropTypes.func,
    onClickOption: PropTypes.func,
  }),
};

export default OptionGroup;
