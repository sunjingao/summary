import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class DropdownItem extends Component {

  static elementName = 'DropdownItem';

  onClick(event) {

    if (this.props.isDisabled) {
      return;
    }

    this.props.onCommand && this.props.onCommand(this.props.content, event);
  }

  render() {

    return (
      <div
        className={this.className(
          'v-dropdown-item',
          this.props.isDisabled && 'v-disabled',
          this.props.isDivided && 'v-divided'
        )}
        style={this.style()}
      >
        <div onClick={this.onClick.bind(this)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DropdownItem.propTypes = {
  isDisabled: PropTypes.bool,
  isDivided: PropTypes.bool,
  content: PropTypes.string,
  onCommand: PropTypes.func,
};

export default DropdownItem;
