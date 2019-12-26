import React from 'react';
import PropTypes from "prop-types";
import Component from '../../../Base/index';

class Yearpicker extends Component {

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

  isDisabled(value, range) {

    let borderValue = NaN;

    // 判断当range中的end存在而start不存在的情况
    if (
      range.some(x => {
        if (!!x.end && !x.start) {
          return borderValue = x.end.year;
        }
      })
    ) {
      if (value <= borderValue) {
        return false;
      }
    }

    // 判断当range中的start存在而end不存在的情况
    if (
      range.some(x => {
        if (!!x.start && !x.end) {
          return borderValue = x.start.year;
        }
      })
    ) {
      if (value >= borderValue) {
        return false;
      }
    }

    // 对范围进行判断
    return !range.some(x => {
      return !!x.start && !!x.end && value >= x.start.year && value <= x.end.year;
    });
  }

  // 配置timeContent
  configTimeContent(year, yearStart, yearEnd) {

    let timeContent = {
      year: year, // 当前选中的时间
      title: `${yearStart} - ${yearEnd}`, // 标题
      content: [] // 年份数组
    };

    for (let yearIndex = yearStart; yearIndex <= yearEnd; yearIndex++) {
      timeContent.content.push({
        value: yearIndex,
        selected: timeContent.year === yearIndex,
        disabled: this.props.options && this.props.options.range && this.isDisabled(yearIndex, this.props.options.range),
      });
    }

    return timeContent;
  }

  // 对pickerObj进行赋值
  getInitTime() {

    let year = this.props.selectedDate && this.props.selectedDate.year,
      yearStart = parseFloat(String(year).substring(0, 3) + 0),
      yearEnd = parseFloat(String(year).substring(0, 3) + 9);

    return this.configTimeContent(year, yearStart, yearEnd);
  }

  // 进行前十年或后十年的操作时
  onChangeYears(addOrDec) {

    let timeContent = this.state.timeContent,
      yearStart = +timeContent.title.split('-')[0].trim() + (addOrDec === "left" ? (-10) : (+10)),
      yearEnd = yearStart + 9;

    this.setState({
      timeContent: this.configTimeContent(timeContent.year, yearStart, yearEnd)
    });
  }

  // 选中某个时间点的时候
  onConfirm(item, event) {

    event.nativeEvent.stopImmediatePropagation();

    if (!item.disabled) {
      this.props.onSelect && this.props.onSelect(
        {
          year: item.value
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
            ${item.disabled ? 'v-disabled' : 'v-enable'}
            ${item.selected ? 'v-selected' : ''}
          `}
          onClick={event => this.onConfirm(item, event)}
        >
          {item.value}
        </div>
    );

    return (
      <div className={this.className("v-yearpicker", "v-popper")} style={this.style()}>
        <div className="v-popper-content">
          <div className="v-title">
            <div onClick={_ => this.onChangeYears('left')}>&lt;&lt;</div>
            <div>{this.state.timeContent && this.state.timeContent.title}</div>
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

Yearpicker.propTypes = {
  options: PropTypes.object,      // 配置
  selectedDate: PropTypes.object, // 当前选中的时间
  isUpdateTime: PropTypes.object, // 是否需要初始化数据
};

export default Yearpicker;
