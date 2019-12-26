import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class BadgeItem extends Component {

  static elementName = 'BreadcrumbItem';

  // 获取样式
  getHrefCls() {
    return !!this.props.to ? 'v-showHref' : '';
  }

  // 跳转
  onJump() {
    this.props.to && (window.location.href = String(this.props.to));
  }

  render() {

    return (
      <div
        className={this.className('v-breadcrumbItem', this.getHrefCls())}
        style={this.style()}
      >
        <div onClick={this.onJump.bind(this)}>{this.props.children}</div>
        {
          !this.props.parent.isLast &&
          <span className="v-separator">{this.props.parent.separator}</span>
        }
      </div>
    );
  }
}

BadgeItem.propTypes = {

  to: PropTypes.string,               // 要跳转到的url

  parent: PropTypes.shape({           // 外层元素传入的值
    isLast: PropTypes.bool,
    separator: PropTypes.string,
  }),
};

export default BadgeItem;
