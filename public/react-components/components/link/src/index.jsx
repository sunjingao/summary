import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Link extends Component {

  render() {
    return (
      <a
        className={this.className(
          'v-link',
          this.props.isDisabled ? 'v-disabled' : ''
        )}
        style={this.style()}
        href={this.props.href}
      >
        <span
          className={`
            v-${this.props.type}
            ${this.props.isDisabled ? 'v-disabled' : ''}
            ${this.props.hasUnderline ? 'v-underline' : ''}
          `}
        >
          {this.props.children}
        </span>
      </a>
    );
  }
}

Link.defaultProps = {
  type: 'default',
  hasUnderline: true,
};

Link.propTypes = {
  type: PropTypes.oneOf(['default', 'success', 'warning', 'primary', 'info', 'danger']), // 类型：default / success / warning / primary / info / danger
  isDisabled: PropTypes.bool,                                                            // 文字是否禁止操作
  hasUnderline: PropTypes.bool,                                                          // 是否展示下划线 
  href: PropTypes.string,                                                                // 跳转的地址
};

export default Link;
