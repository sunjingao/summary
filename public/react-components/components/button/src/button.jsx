import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../Base/index';

class Button extends Component {

  static elementName = 'Button';

  // 是否为 disabled
  getIsDisabled() {
    return (this.props.isDisabled || this.props.isLoading) ? 'v-disabled' : '';
  }

  // onClick 事件触发
  onClick(event) {
    this.props.onClick && this.props.onClick(event);
  }

  render() {
    return (
      <button
        className={this.className(
          'v-button',
          this.getIsDisabled(),
          this.props.type ? `v-${this.props.type}Btn` : '',
          this.props.isPlain ? 'v-isPlain' : '',
          this.props.isRound ? 'v-isRound' : '',
        )}
        style={{
          ...this.style(),
          width: !!this.props.width ? `${this.props.width}px` : 'auto',
          height: !!this.props.height ? `${this.props.height}px` : 'auto',
        }}
        disabled={this.getIsDisabled()}
        onClick={this.onClick.bind(this)}
      >
        {this.props.isLoading && <i className="iconfont icon-loading"/>}
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'default',
};

Button.propTypes = {
  type: PropTypes.string,      // 类型: default、primary、success、warning、info、danger
  width: PropTypes.number,     // 宽度
  height: PropTypes.number,    // 高度
  isPlain: PropTypes.bool,     // 是否朴素按钮
  isRound: PropTypes.bool,     // 是否圆角按钮
  isDisabled: PropTypes.bool,  // 是否禁用状态
  isLoading: PropTypes.bool,   // 是否加载中状态

  onClick: PropTypes.func,     // 当点击时，触发函数
};

export default Button;


