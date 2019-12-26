import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';

class Card extends Component {

  render() {

    return (
      <div className={this.className('v-card')} style={this.style()}>
        {
          this.props.headerComponent &&
          <div className="v-header" style={this.props.headerStyle}>
            {this.props.headerComponent}
          </div>
        }
        {
          this.props.children &&
          <div className="v-content" style={this.props.contentStyle}>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

Card.defaultProps = {
  headerStyle: {},
  contentStyle: {},
};

Card.propTypes = {
  headerStyle: PropTypes.object,   // 标题处的样式
  contentStyle: PropTypes.object,  // 内容处的样式
  headerComponent: PropTypes.node, // 表头自定义组件
};

export default Card;


