import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

import clickoutside from '../../../src/utils/clickoutside';
import deepClone from "../../../src/utils/deepClone"

import Input from '../../input/index';
import Timeauto from "./timeauto"


class TimePicker extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isShowPopper: false, // 是否展示popper
      showValue: '',       // input中展示的value值
      changeTime: null,    // 被选中的时间
    };

    this.params = {
      popperHandler: null, // popper 句柄
      autoCallbacks: {}, // timeauto 实例
      autoView: null, // autoInstimeautotance 视图
      inputWidth: this.props.width ? this.props.width : this.props.isShowEndTime ? 200 : 170, // 输入框宽度
      // 默认事件范围
      defaultTime: {
        startTime: {
          hour: '00',
          minute: '00',
          second: '00'
        },
        endTime: {
          hour: '00',
          minute: '00',
          second: '00'
        }
      },
    };

    this.ref = {
      reference: React.createRef(),
      popper: React.createRef(),
    };

    this.state.changeTime = this.getInitChangeTime();
    this.state.showValue = this.getInitInputValue();
  }

  componentDidMount() {

    clickoutside.bind(this.ref.reference.current, this.clickOutside.bind(this));

    this.params.popperHandler = new Popper(
      this.ref.reference.current,
      this.params.autoView,
      {
        updateImmediately: false,
        placement: 'bottom-start',
        modifiers: {
          offset: {
            offset: [0, 10]
          }
        }
      }
    );

    this.params.popperHandler.hide();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.timeRange.default !== this.props.timeRange.default) {
      this.state.changeTime = this.getInitChangeTime();
      this.state.showValue = this.getInitInputValue();
      this.setState({});
    }
  }

  componentWillUnmount() {
    clickoutside.unbind(this.ref.reference.current);
  }

  register(callbacks, view) {

    this.params.autoCallbacks = {
      initDatas: callbacks.initDatas,
      onConfirm: callbacks.onConfirm,
      onCancel: callbacks.onCancel,
    };

    this.params.autoView = view;
  }

  // 将一位长度的字符串转为两位长度
  toTwoLengthString(value) {
    if (value === null || value === undefined || value === "") {
      return "";
    } else {
      return value.toString().length < 2 ? `0${value}` : value;
    }
  }

  getPlaceholder() {
    return this.props.isShowEndTime ?
      `${this.props.frontPlaceholder} - ${this.props.behindPlaceholder}` : this.props.placeholder;
  }

  // 输入框中的内容
  getInputValue() {

    let inputShowTimeArr = [];

    for (let startOrEndObj of Object.values(this.state.changeTime)) {
      inputShowTimeArr.push(
        this.toTwoLengthString(startOrEndObj.hour) + ':' +
        this.toTwoLengthString(startOrEndObj.minute) + ':' +
        this.toTwoLengthString(startOrEndObj.second)
      );
    }

    return inputShowTimeArr[0] + (this.props.isShowEndTime ? ` - ${inputShowTimeArr[1]}` : "");
  }

  getInitInputValue() {
    return this.props.timeRange.default ? this.getInputValue() : ''
  }

  // 初始化changeTime这个对象
  getInitChangeTime() {

    let val = this.props.timeRange;

    let startHour = val.default && val.default.startTime && this.toTwoLengthString(String(val.default.startTime.hour))
      || this.params.defaultTime.startTime.hour;
    let startMinute = val.default && val.default.startTime && this.toTwoLengthString(String(val.default.startTime.minute))
      || this.params.defaultTime.startTime.minute;
    let startSecond = val.default && val.default.startTime && this.toTwoLengthString(String(val.default.startTime.second))
      || this.params.defaultTime.startTime.second;

    let endHour = val.default && val.default.endTime && this.toTwoLengthString(String(val.default.endTime.hour))
      || this.params.defaultTime.endTime.hour;
    let endMinute = val.default && val.default.endTime && this.toTwoLengthString(String(val.default.endTime.minute))
      || this.params.defaultTime.endTime.minute;
    let endSecond = val.default && val.default.endTime && this.toTwoLengthString(String(val.default.endTime.second))
      || this.params.defaultTime.endTime.second;


    return {
      startTime: {
        hour: startHour,
        minute: startMinute,
        second: startSecond
      },
      endTime: {
        hour: endHour,
        minute: endMinute,
        second: endSecond
      }
    };
  }

  // 展示 popper
  showPopper() {

    if (this.state.isShowPopper) {
      return;
    }

    this.setState({
      isShowPopper: true,
    });

    this.params.popperHandler.show();

    this.params.autoCallbacks.initDatas();
  }

  // 隐藏popper
  hidePopper() {

    if (!this.state.isShowPopper) {
      return;
    }

    this.setState({
      isShowPopper: false,
    });

    this.params.popperHandler.hide();
  }

  clickOutside(sign) {
    sign ? this.hidePopper() : this.showPopper();
  }

  // 回车时的操作
  enterConfirm(event) {
    if (!this.state.isShowPopper) {
      this.showPopper();
    } else {
      this.params.autoCallbacks.onConfirm(event);
    }
  }

  // esc键时的操作
  enterCancel(event) {
    this.params.autoCallbacks.onCancel(event);
  }

  onReferenceKeyDown(event) {
    switch (event.keyCode) {
      case 27:
        this.enterCancel(event);
        break;
      case 13:
        this.enterConfirm(event);
        break;
    }
  }

  // 点击删除符号
  onClear() {

    this.hidePopper();

    this.setState({
      changeTime: deepClone(this.params.defaultTime),
      showValue: ""
    });

    this.props.onClear && this.props.onClear();
  }

  // 点击取消
  onAutoClose() {
    this.hidePopper();
  }

  // 确认选中时
  onAutoComplete(obj) {

    this.state.changeTime = {
      startTime: {
        hour: obj.startTime.hour,
        minute: obj.startTime.minute,
        second: obj.startTime.second,
      },
      endTime: {
        hour: this.props.isShowEndTime && obj.endTime.hour,
        minute: this.props.isShowEndTime && obj.endTime.minute,
        second: this.props.isShowEndTime && obj.endTime.second,
      }
    };
    this.state.showValue = this.getInputValue();

    this.setState({});

    this.hidePopper();

    this.props.onSelect && this.props.onSelect(obj);
  }

  render() {

    return (

      <div
        ref={this.ref.reference}
        className={this.className("v-timepicker")}
        style={{width: this.params.inputWidth + 'px', height: this.props.height + 'px', ...this.style()}}
        onKeyDown={this.onReferenceKeyDown.bind(this)}
      >

        <Input
          readonly
          value={this.state.showValue}
          width={this.params.inputWidth}
          height={this.props.height}
          isCleanable={this.props.isCleanable}
          placeholder={this.getPlaceholder()}
          onClear={this.onClear.bind(this)}
          frontComponent={
            <span className="iconfont icon-time v-timepicker-front"/>
          }
        />

        <Timeauto
          ref={this.ref.popper}
          isShowEndTime={this.props.isShowEndTime}
          itemHeight={this.props.itemHeight}
          timeRange={this.props.timeRange}
          changeTime={this.state.changeTime}
          autoClose={this.onAutoClose.bind(this)}
          autoComplete={this.onAutoComplete.bind(this)}
          register={this.register.bind(this)}
        />

      </div>
    );
  }
}

TimePicker.defaultProps = {
  height: 40,
  itemHeight: 30,
  placeholder: '请选择时间',
  frontPlaceholder: '起始时间',
  behindPlaceholder: '结束时间',
};

TimePicker.propTypes = {

  timeRange: PropTypes.object,         // 时间范围

  isShowEndTime: PropTypes.bool,       // 是否展示结束时间
  isCleanable: PropTypes.bool,         // 是否带有清空功能

  placeholder: PropTypes.string,       // 只有开始时间的默认展示
  frontPlaceholder: PropTypes.string,  // 开始时间默认展示
  behindPlaceholder: PropTypes.string, // 结束时间默认展示

  width: PropTypes.number,             // 宽度
  height: PropTypes.number,            // 高度
  itemHeight: PropTypes.number,        // 滚动范围item高度


};

export default TimePicker;