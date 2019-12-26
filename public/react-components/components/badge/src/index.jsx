import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Badge extends Component {

  showValue() {
    if (this.props.max && this.props.max < this.props.value) {
      return `${this.props.max}+`;
    }
    return this.props.value;
  }

  render() {
    return (
      <div className={this.className("v-badge")} style={this.style()}>
        {this.props.children}
        {
          this.props.isDot ?
            <span className={`v-dot ${this.props.iconClass || ''}`}/> :
            <span className={`v-icon ${this.props.iconClass || ''}`}>{this.showValue()}</span>
        }
      </div>
    );
  }
}

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 要展示的内容
  iconClass: PropTypes.string,                                      // 右上角图标的自定义样式
  max: PropTypes.number,                                            // 最大值
  isDot: PropTypes.bool,                                            // 是否显示红点
};

export default Badge;