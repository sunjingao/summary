import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Steps extends Component {

  render() {

    let children = React.Children.map(
      this.props.children,
      (item, index) => {

        if (!React.isValidElement(item) || item.type.elementName !== 'Step') {
          return null;
        }

        return React.cloneElement(
          item,
          {
            parent: {
              currentIndex: index,
              space: this.props.space,
              process: this.props.process,
              isError: this.props.isError,
              isSimple: this.props.isSimple,
              isLast: React.Children.count(this.props.children) - 1 === index,
            }
          }
        )
      }
    );
    return (
      <div className={this.className('v-steps')} style={this.style()}>{children}</div>
    );
  }
}

Steps.defaultProps = {
  space: 0,
  process: 0,
};

Steps.propTypes = {
  space: PropTypes.number,   // 横线的宽度
  process: PropTypes.number, // 当前处理项的索引
  isError: PropTypes.bool,   // 当前处理项是否为error
  isSimple: PropTypes.bool,  // 是否简单模式
};

export default Steps;
