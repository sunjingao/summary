import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Divider extends Component {

  render() {

    let children = null;

    if (this.props.direction === 'horizontal' && this.props.children) {
      children = <div className={`v-slot v-${this.props.position}`}>
        {this.props.children}
      </div>
    }

    return (
      <div
        className={this.className('v-divider', `v-${this.props.direction}`)}
        style={this.style()}
      >
        {children}
      </div>
    );
  }
}

Divider.defaultProps = {
  direction: 'horizontal',
  position: 'left',
};

Divider.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']), // 方向
  position: PropTypes.oneOf(['left', 'right', 'center']), // direction为horizontal，插槽的水平定位
};

export default Divider;
