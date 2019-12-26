import React from 'react';
import PropTypes from "prop-types";
import memoize from 'memoize-one';
import Component from '../../Base/index';
import Input from '../../input/index';
import repeatclick from '../../../src/utils/repeatclick';

class InputNumber extends Component {

  constructor(props) {

    super(props);

    this.state = {
      value: props.value, // input 输入框中的值
    };

    this.params = {
      DEFAULTSIDE: 'bothSides',
      tempValue: this.props.value
    };

    this.ref = {
      down: React.createRef(),
      up: React.createRef(),
      input: React.createRef(),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.prevPropsValue) {
      return {
        prevPropsValue: props.value,
        value: props.value
      };
    }
    return null;
  }

  componentDidMount() {
    repeatclick.bind(this.ref.down.current, this.decrease.bind(this));
    repeatclick.bind(this.ref.up.current, this.increase.bind(this));
  }

  // 是否可以减小
  canDecrease = memoize((isDisabled, value, step, min) =>
    !isDisabled && value - step >= min
  );

  // 是否可以增加
  canIncrease = memoize((isDisabled, value, step, max) =>
    !isDisabled && value + step <= max
  );

  // 改变value值
  change(value) {
    this.setState({value: value});
    this.props.onChange && this.props.onChange(value);
  }

  // 点击减小按钮
  decrease() {

    if (this.canDecrease(this.props.isDisabled, this.state.value, this.props.step, this.props.min)) {

      this.change(this.state.value - this.props.step);
    }
  }

  // 点击增加按钮
  increase() {

    if (this.canIncrease(this.props.isDisabled, this.state.value, this.props.step, this.props.max)) {

      this.change(this.state.value + this.props.step);
    }
  }

  // 数据改变时触发，由于输入的内容可能存在问题，所以存放到临时变量中
  onChange(value) {
    this.params.tempValue = value;
  }

  // 失去焦点时触发
  onBlur() {

    let value = null;

    if (this.params.tempValue >= this.props.min && this.params.tempValue <= this.props.max) {
      value = Number(this.params.tempValue);
    }
    else {
      value = this.state.value;
      this.ref.input.current.resetValueHandle(value);
    }
    this.change(value);
  }

  render() {

    let frontComponent = null, behindComponent = null,
      canDecrease = this.canDecrease(this.props.isDisabled, this.state.value, this.props.step, this.props.min),
      canIncrease = this.canIncrease(this.props.isDisabled, this.state.value, this.props.step, this.props.max);

    if (this.props.controlsPosition === this.params.DEFAULTSIDE) {

      frontComponent =
        <div
          ref={this.ref.down}
          className={`
            v-input-number-front
            ${!canDecrease && 'v-disabled' || ''}
          `}
          style={{
            height: `${this.props.height - 2}px`,
            lineHeight: `${this.props.height - 2}px`,
          }}
        >
          <span className="iconfont icon-decrease"/>
        </div>;

      behindComponent =
        <div
          ref={this.ref.up}
          className={`
            v-input-number-behind
            ${!canIncrease && 'v-disabled' || ''}
          `}
        >
          <span className="iconfont icon-increase"/>
        </div>;
    }
    else {

      behindComponent =
        <div className="v-input-number-right">
          <div
            ref={this.ref.up}
            className={`
              v-input-number-top
              ${!canIncrease && 'v-disabled' || ''}
            `}
            style={{
              lineHeight: `${(this.props.height - 2) / 2}px`,
              height: `${(this.props.height - 2) / 2}px`
            }}
          >
            <span className="iconfont icon-increase"/>
          </div>

          <div
            ref={this.ref.down}
            className={`
              v-input-number-bottom
              ${!canDecrease && 'v-disabled' || ''}
            `}
            style={{
              lineHeight: `${(this.props.height - 2) / 2}px`,
              height: `${(this.props.height - 2) / 2}px`,
            }}
          >
            <span className="iconfont icon-decrease"/>
          </div>
        </div>
    }

    return (
      <Input
        ref={this.ref.input}
        className={this.className('v-input-number')}
        style={{...this.style(), height: `${this.props.height}px`}}
        value={this.state.value}
        width={this.props.width}
        height={this.props.height}
        isDisabled={this.props.isDisabled}
        textAlign={this.props.textAlign}
        frontComponent={frontComponent}
        behindComponent={behindComponent}
        onBlur={this.onBlur.bind(this)}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}

InputNumber.defaultProps = {
  value: 0,
  controlsPosition: 'bothSides',
  width: 180,
  height: 40,
  min: -Number.MAX_VALUE,
  max: Number.MAX_VALUE,
  step: 1,
  textAlign: 'center',
};

InputNumber.propTypes = {
  value: PropTypes.number,            // 输入框的内容
  controlsPosition: PropTypes.oneOf(['bothSides', 'rightSide']), // 控制点击区域的位置
  isDisabled: PropTypes.bool,         // 是否禁止选中
  width: PropTypes.number,            // input-number组件的宽度
  height: PropTypes.number,           // input-number组件的高度
  min: PropTypes.number,              // 最小值
  max: PropTypes.number,              // 最大值
  step: PropTypes.number,             // 每次改变的大小
  textAlign: PropTypes.string,        // input中的内容的位置

  onChange: PropTypes.func,           // 改变时触发
};

export default InputNumber;
