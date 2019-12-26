import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';

class ButtonGroup extends Component {

  render() {

    let children = React.Children.map(
      this.props.children,
      item => {

        if (!React.isValidElement(item) || item.type.elementName !== 'Button') {
          return null;
        }

        return item;
      }
    );

    return (
      <div
        className={this.className(
          'v-button-group',
          `v-button-group-${this.props.type}`
        )}
        style={this.style()}
      >
        {children}
      </div>
    )
  }
}

ButtonGroup.defaultProps = {
  type: 'horizontal',
};

ButtonGroup.propTypes = {
  type: PropTypes.string, // 方向类型：horizontal、vertical
};

export default ButtonGroup;
