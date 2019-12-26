import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class DropdownMenu extends Component {

  render() {

    let children = React.Children.map(
      this.props.children,
      item => {

        if (!React.isValidElement(item) || item.type.elementName !== 'DropdownItem') {
          return null;
        }

        return React.cloneElement(
          item,
          {onCommand: this.props.onCommand}
        );
      }
    );

    return (
      <div className={this.className('v-dropdown-menu')} style={this.style()}>
        {children}
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  onCommand: PropTypes.func,
};

export default DropdownMenu;
