import React from 'react';
import PropTypes from "prop-types";
import Component from '../../../Base/index';

class Monthpicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeContent: this.getInitTime(),
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.options !== this.props.options ||
      prevProps.selectedDate !== this.props.selectedDate ||
      prevProps.isUpdateTime !== this.props.isUpdateTime
    ) {
      this.setState({
        timeContent: this.getInitTime(),
      });
    }
  }

  // 将月份索引转为对应的月份
  convertIndexToMonth(monthIndex) {
    switch (monthIndex) {
      case 0:
        return "一月";
      case 1:
        return "二月";
      case 2:
        return "三月";
      case 3:
        return "四月";
      case 4:
        return "五月";
      case 5:
        return "六月";
      case 6:
        return "七月";
      case 7:
        return "八月";
      case 8:
        return "九月";
      case 9:
        return "十月";
      case 10:
        return "十一月";
      case 11:
        return "十二月";
    }
  }

  // 判断是否可选
  isDisabled(monthIndex, timeContent, range) {

    let borderObj = NaN;

    // 判断当range中的end存在而start不存在的情况
    if (
      range.some(x => {
        if (!!x.end && !x.start) {
          return borderObj = x.end;
        }
      })
    ) {
      if (timeContent.titleYear < borderObj.year || (timeContent.titleYear === borderObj.year && monthIndex <= borderObj.month - 1)) {
        return false;
      }
    }

    // 判断当range中的start存在而end不存在的情况
    if (
      range.some(x => {
        if (!!x.start && !x.end) {
          return borderObj = x.start;
        }
      })
    ) {
      if (+timeContent.titleYear > borderObj.year || (timeContent.titleYear === borderObj.year && monthIndex >= borderObj.month - 1)) {
        return false;
      }
    }

    // 对范围进行判断
    return !range.some(x => {
      return !!x.start && !!x.end &&
        (x.start.year < timeContent.titleYear || (x.start.year === timeContent.titleYear && x.start.month - 1 <= monthIndex)) &&
        (x.end.year > timeContent.titleYear || (x.end.year === timeContent.titleYear && x.end.month - 1 >= monthIndex));
    });

  }

  // timeContent赋值
  getTimeContent(titleYear, selectYear, selectMonth) {

    let timeContent = {
      titleYear: titleYear, // 标题
      selectYear: selectYear, // 保存被选中的年份
      selectMonth: selectMonth, // 保存被选中的月份
      content: []
    };

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      timeContent.content.push({
        numericMonth: monthIndex,
        value: this.convertIndexToMonth(monthIndex),
        disabled: this.props.options && this.props.options.range && this.isDisabled(monthIndex, timeContent, this.props.options.range),
        selected: monthIndex === timeContent.selectMonth && timeContent.titleYear === timeContent.selectYear
      })
    }

    return timeContent;
  }

  // 初始化 timeContent
  getInitTime() {
    return this.getTimeContent(
      this.props.selectedDate.year,
      this.props.selectedDate.year,
      this.props.selectedDate.month
    )
  }

  // 进行前十年或后十年的操作时
  onChangeYears(addOrSub) {

    this.setState({
      timeContent: this.getTimeContent(
        this.state.timeContent.titleYear + (addOrSub === "left" ? (-1) : (+1)),
        this.state.timeContent.selectYear,
        this.props.selectedDate.month
      )
    });
  }

  // 选中某个时间点的时候
  onConfirm(item, event) {

    event.nativeEvent.stopImmediatePropagation();

    if (!item.disabled) {
      this.props.onSelect && this.props.onSelect(
        {
          year: this.state.timeContent.titleYear,
          month: item.numericMonth
        }
      );
    }
  }

  render() {

    let content = this.state.timeContent && this.state.timeContent.content.map(
      (item, index) =>
        <div
          key={index}
          className={`
            ${item.disabled ? 'v-disabled' : 'v-able'}
            ${item.selected ? 'v-selected' : ''}
         `}
          onClick={event => this.onConfirm(item, event)}
        >
          {item.value}
        </div>
    );

    return (
      <div className={this.className('v-monthpicker', 'v-popper')} style={this.style()}>
        <div className="v-popper-content">
          <div className="v-title">
            <div onClick={_ => this.onChangeYears('left')}>&lt;&lt;</div>
            <div>{this.state.timeContent && this.state.timeContent.titleYear}</div>
            <div onClick={_ => this.onChangeYears('right')}>&gt;&gt;</div>
          </div>
          <div className="v-content">
            {content}
          </div>
        </div>
        <div className="v-popper-arrow"/>
      </div>
    );
  }
}

Monthpicker.propTypes = {
  options: PropTypes.object,      // 配置
  selectedDate: PropTypes.object, // 当前选中的时间
  isUpdateTime: PropTypes.object, // 是否需要初始化数据
};

export default Monthpicker;
