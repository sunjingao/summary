import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Badge extends Component {

  render() {

    let childrenLen = React.Children.count(this.props.children),

      children = React.Children.map(
        this.props.children,
        (item, index) => {

          if (!React.isValidElement(item) || item.type.elementName !== 'BreadcrumbItem') {
            return null;
          }

          return React.cloneElement(
            item,
            {
              parent: {
                isLast: index === childrenLen - 1,
                separator: this.props.separator,
              }
            }
          )
        }
      );

    return (
      <div className={this.className("v-breadcrumb")} style={this.style()}>
        {children}
      </div>
    );
  }
}

Badge.defaultProps = {
  separator: '/',
};

Badge.propTypes = {
  separator: PropTypes.string,
};

export default Badge;