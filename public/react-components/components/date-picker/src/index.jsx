import React from 'react';
import PropTypes from "prop-types";
import deepClone from '../../../src/utils/deepClone';
import clickoutside from '../../../src/utils/clickoutside';
import Component from '../../Base/index';
import Yearpicker from './pickers/yearpicker';
import Monthpicker from './pickers/monthpicker';
import Datetimepicker from './pickers/datetimepicker';
import Input from '../../input/index';

class Index extends Component {

  constructor(props) {

    super(props);

    this.ref = {
      reference: React.createRef(),
      popper: React.createRef(),
    };

    this.params = {
      // popper句柄
      popperHandler: null,
    };

    this.state = {
      // 用于控制输入框展示和自动提示筛选的内容
      showValue: this.getShowValue(this.props.options.defaultShow),
      selectedDate: this.getInitSelectedDate(), // 选中的时间
      isUpdateTime: {}, // 关闭popper时，将popper恢复至选中位置
    };
  }

  componentDidMount() {

    clickoutside.bind(this.ref.reference.current, this.clickOutside.bind(this));

    this.params.popperHandler = new Popper(
      this.ref.reference.current,
      this.ref.popper.current.children[0],
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
    if (prevProps.options !== this.props.options) {
      this.setState({
        showValue: this.getShowValue(this.props.options.defaultShow),
        selectedDate: this.getInitSelectedDate(),
      });
    }
  }

  componentWillUnmount() {
    clickoutside.unbind(this.ref.reference.current);
    this.params.popperHandler.destroy();
  }

  toTwoLengthStr(str) {

    str = String(str);
    if (str.length === 1) {
      return `0${str}`;
    }
    return str;
  }

  // 初始化 被选中的日期
  getInitSelectedDate() {

    let selectedDate;

    if (this.props.options.defaultShow) {
      selectedDate = this.props.options.defaultShow;
    }
    else {
      let date = new Date();
      selectedDate = {year: date.getFullYear()};
      this.props.type !== 'year' && (selectedDate.month = date.getMonth());
      this.props.type === 'date' && (selectedDate.date = date.getDate());
    }

    return selectedDate;
  }

  // 设置 input展示的值
  getShowValue(value = '') {

    let showValue = '';
    if (typeof value === 'object' && Object.keys(value).length > 0) {
      showValue = value.year;
      value.month >= 0 && (showValue += "-" + this.toTwoLengthStr(value.month + 1));
      value.date >= 0 && (showValue += "-" + this.toTwoLengthStr(value.date));
    } else {
      showValue = value;
    }
    return showValue;
  }

  showPopper() {
    this.params.popperHandler.show();
  }

  hidePopper() {

    this.params.popperHandler.hide();

    this.setState({
      isUpdateTime: {}
    });
  }

  clickOutside(sign) {
    sign ? this.hidePopper() : this.showPopper();
  }

  onClean() {

    this.setState({
      showValue: this.getShowValue(this.props.options.defaultShow),
      selectedDate: this.getInitSelectedDate(),
    });

    this.hidePopper();

    this.props.onChange && this.props.onChange(null);
  }

  // 用户选中时间
  onSelect(value) {

    this.setState({
      showValue: this.getShowValue(value),
      selectedDate: value,
    });

    this.hidePopper();

    this.props.onChange && this.props.onChange(deepClone(value));
  }

  render() {

    return (
      <div
        ref={this.ref.reference}
        className={this.className("v-date-picker")}
        style={{width: this.props.width + 'px', ...this.style()}}
      >
        <Input
          readonly
          value={this.state.showValue}
          placeholder={this.props.placeholder}
          width={this.props.width}
          height={this.props.height}
          isCleanable={this.props.isCleanable}
          onClear={this.onClean.bind(this)}
          frontComponent={
            <span className={"iconfont icon-date v-date-picker-front"}/>
          }
        />
        <div ref={this.ref.popper}>
          {
            this.props.type === 'year' &&
            <Yearpicker
              options={this.props.options}
              selectedDate={this.state.selectedDate}
              onSelect={this.onSelect.bind(this)}
              isUpdateTime={this.state.isUpdateTime}
            />
          }

          {
            this.props.type === 'month' &&
            <Monthpicker
              options={this.props.options}
              selectedDate={this.state.selectedDate}
              onSelect={this.onSelect.bind(this)}
              isUpdateTime={this.state.isUpdateTime}
            />
          }

          {
            this.props.type === 'date' &&
            <Datetimepicker
              options={this.props.options}
              selectedDate={this.state.selectedDate}
              onSelect={this.onSelect.bind(this)}
              isUpdateTime={this.state.isUpdateTime}
            />
          }
        </div>
      </div>
    );
  }

}

Index.defaultProps = {
  type: 'date',
  width: 170,
  height: 40,
};

Index.propTypes = {
  type: PropTypes.string,        // 展示年份/月份/日期
  options: PropTypes.object,     // 配置
  isCleanable: PropTypes.bool,   // 是否带有清空功能
  width: PropTypes.number,       // 宽度
  height: PropTypes.number,      // 高度
  placeholder: PropTypes.string, // 默认显示内容
  onChange: PropTypes.func,      // 改变日期时触发
};

export default Index;
