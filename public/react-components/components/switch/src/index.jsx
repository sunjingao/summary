import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Switch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sign: this.props.value
    };
  }

  static getDerivedStateFromProps(props, state) {

    if (props.value !== state.prevPropsValue) {
      return {
        prevPropsValue: props.value,
        value: props.value,
      };
    }

    return null;
  }

  // 获得圆距离左侧的距离
  getCircleLeft() {
    // 1为border的大小
    return this.state.sign ? (this.props.width - this.props.height + 1) : 1;
  }

  // 点击事件
  onClick() {

    if (this.props.isDisabled) {
      return;
    }

    let nowSign = !this.state.sign;

    this.setState({
      sign: nowSign
    });

    this.props.onToggle && this.props.onToggle(nowSign);
  }

  render() {

    return (
      <div
        className={this.className('v-switch', this.props.isDisabled && 'v-disabled' || '')}
        style={this.style()}
        onClick={this.onClick.bind(this)}
      >

        {
          this.props.beforeComponent &&
          <div
            className="v-switch-before"
            style={{color: this.state.sign ? this.props.inactiveFontColor : this.props.activeFontColor}}
          >
            {this.props.beforeComponent}
          </div>
        }

        <div className={'v-switch-middle'} style={{width: `${this.props.width}px`, height: `${this.props.height}px`}}>
          <i className={"v-switch-middle-before-circle"}
             style={{
               width: `${this.props.height}px`,
               height: `${this.props.height}px`,
               left: 0,
               backgroundColor: this.state.sign ? this.props.activeBgColor : this.props.inactiveBgColor
             }}
          />
          <i className={"v-switch-middle-circle"}
             style={{
               height: `${this.props.height}px`,
               width: `${this.props.width - this.props.height}px`,
               left: `${this.props.height / 2}px`,
               backgroundColor: this.state.sign ? this.props.activeBgColor : this.props.inactiveBgColor
             }}
          />
          <i
            className={"v-switch-middle-behind-circle"}
            style={{
              width: `${this.props.height}px`,
              height: `${this.props.height}px`,
              left: `${this.props.width - this.props.height}px`,
              backgroundColor: this.state.sign ? this.props.activeBgColor : this.props.inactiveBgColor
            }}
          />
          <i
            className={"v-switch-middle-move-circle"}
            style={{
              width: `${this.props.height - 2}px`,
              height: `${this.props.height - 2}px`,
              left: `${this.getCircleLeft()}px`,
              backgroundColor: this.props.circleBgColor
            }}
          />
        </div>

        {
          this.props.behindComponent &&
          <div
            className="v-switch-behind"
            style={{color: this.state.sign ? this.props.activeFontColor : this.props.inactiveFontColor}}
          >
            {this.props.behindComponent}
          </div>
        }

      </div>
    )
  }
}

Switch.defaultProps = {
  value: true,
  width: 40,
  height: 20,
  circleBgColor: '#fff',
  inactiveBgColor: '#C0CCDA',
  activeBgColor: '#409EFF',
  inactiveFontColor: '#303133',
  activeFontColor: '#409eff',
};

Switch.propTypes = {
  value: PropTypes.bool,               // 绑定值
  width: PropTypes.number,             // 宽度
  height: PropTypes.number,            // 高度
  isDisabled: PropTypes.bool,          // 是否禁止操作
  circleBgColor: PropTypes.string,     // 中间的移动的圆的背景颜色
  inactiveBgColor: PropTypes.string,   // 状态为false时的背景颜色
  activeBgColor: PropTypes.string,     // 状态为true时的背景颜色
  inactiveFontColor: PropTypes.string, // 状态为false时的字体颜色
  activeFontColor: PropTypes.string,   // 状态为true时的字体颜色

  beforeComponent: PropTypes.node,     // 前置插槽
  behindComponent: PropTypes.node,     // 后置插槽

  onToggle: PropTypes.func,            // 改变状态时，触发函数
};

export default Switch;
