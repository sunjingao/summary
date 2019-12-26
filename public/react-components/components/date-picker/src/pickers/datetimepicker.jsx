import React from 'react';
import PropTypes from "prop-types";
import Component from '../../../Base/index';

class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeContent: this.getInitTimeContent(),
    };
    this.params = {
      weekList: ["一", "二", "三", "四", "五", "六", "日"],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.options !== this.props.options ||
      prevProps.selectedDate !== this.props.selectedDate ||
      prevProps.isUpdateTime !== this.props.isUpdateTime
    ) {
      this.setState({
        timeContent: this.getInitTimeContent(),
      });
    }
  }

  isDisabled(year, month, date) {

    let borderObj = NaN,
      range = this.props.options.range;

    // 判断当range中的end存在而start不存在的情况
    if (
      range.some(x => {
        if (!!x.end && !x.start) {
          return borderObj = x.end;
        }
      })
    ) {
      if (
        year < borderObj.year ||
        year === borderObj.year && month < borderObj.month - 1 ||
        year === borderObj.year && month === borderObj.month - 1 && date <= borderObj.date
      ) {
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
      if (
        year > borderObj.year ||
        year === borderObj.year && month > borderObj.month - 1 ||
        year === borderObj.year && month === borderObj.month - 1 && date >= borderObj.date
      ) {
        return false;
      }
    }

    // 对范围进行判断
    return !range.some(x => {
      return !!x.start && !!x.end &&
        (
          x.start.year < year ||
          x.start.year === year && x.start.month - 1 < month ||
          x.start.year === year && x.start.month - 1 === month && x.start.date <= date
        ) &&
        (
          x.end.year > year ||
          x.end.year === year && x.end.month - 1 > month ||
          x.end.year === year && x.end.month - 1 === month && x.end.date >= date
        );
    });
  }

  getInitTimeContent() {

    let timeContent = {
      titleYear: -1,
      titleMonth: -1,
      selectYear: -1,
      selectMonth: -1,
      selectDate: -1,
      content: []
    };

    let year = this.props.selectedDate.year,
      month = this.props.selectedDate.month,
      date = this.props.selectedDate.date;

    timeContent.titleYear = timeContent.selectYear = year;
    timeContent.titleMonth = timeContent.selectMonth = month;
    timeContent.selectDate = date;

    return this.getInitShowTimeContent(
      timeContent,
      new Date(year, month, 1).getDay(),
      new Date(year, (month + 1), 0).getDate(),
      new Date(year, month, 0).getDate()
    );
  }

  // 本月第一天是星期几，本月有多少天，上个月有多少天
  getInitShowTimeContent(timeContent, selfMonthFirstDay, curMonthDays, lastMonthLastDays) {
    // 在日历表上，第一天的索引和最后一天的索引
    let curFirstDayIndex = selfMonthFirstDay === 1 ? 7 : (selfMonthFirstDay === 0 ? 6 : selfMonthFirstDay - 1),
      curLastDayIndex = selfMonthFirstDay === 1 ? 7 + curMonthDays - 1 :
        (selfMonthFirstDay === 0 ? 6 : selfMonthFirstDay - 1) + curMonthDays - 1;

    timeContent.content = [];

    for (let dayIndex = 0; dayIndex < 6 * 7; dayIndex++) {

      if (dayIndex < curFirstDayIndex) {

        let time = new Date(timeContent.titleYear, timeContent.titleMonth - 1, 1),
          year = time.getFullYear(),
          month = time.getMonth(),
          date = lastMonthLastDays - (curFirstDayIndex - 1) + dayIndex;
        timeContent.content.push(
          {
            value: date,
            year: year,
            month: month,
            disabled: this.props.options && this.props.options.range && this.isDisabled(year, month, date),
            selected: false
          }
        );
      } else if (dayIndex >= curFirstDayIndex && dayIndex <= curLastDayIndex) {
        let date = dayIndex - (curFirstDayIndex - 1);
        timeContent.content.push(
          {
            value: date,
            year: timeContent.titleYear,
            month: timeContent.titleMonth,
            disabled: this.props.options && this.props.options.range && this.isDisabled(timeContent.titleYear, timeContent.titleMonth, date),
            selected: timeContent.titleYear === timeContent.selectYear &&
            timeContent.titleMonth === timeContent.selectMonth &&
            timeContent.selectDate === date
          }
        );
      } else if (dayIndex > curLastDayIndex) {
        let time = new Date(timeContent.titleYear, timeContent.titleMonth + 1, 1),
          year = time.getFullYear(),
          month = time.getMonth(),
          date = dayIndex - curMonthDays - (curFirstDayIndex - 1);
        timeContent.content.push(
          {
            value: date,
            year: time.getFullYear(),
            month: time.getMonth(),
            disabled: this.props.options && this.props.options.range && this.isDisabled(year, month, date),
            selected: false
          }
        );
      }
    }

    return timeContent;
  }

  // type
  // 1：年份-1  2：月份-1  3：月份+1  4：年份+1
  onChangeTime(type) {

    switch (type) {
      case 1:
        --this.state.timeContent.titleYear;
        break;
      case 2:
        if (!this.state.timeContent.titleMonth) {
          --this.state.timeContent.titleYear;
          this.state.timeContent.titleMonth = 11;
        } else {
          --this.state.timeContent.titleMonth;
        }
        break;
      case 3:
        if (this.state.timeContent.titleMonth === 11) {
          ++this.state.timeContent.titleYear;
          this.state.timeContent.titleMonth = 0;
        } else {
          ++this.state.timeContent.titleMonth;
        }
        break;
      case 4:
        ++this.state.timeContent.titleYear;
        break;
      default:
        return;
    }

    this.setState({
      timeContent: this.getInitShowTimeContent(
        this.state.timeContent,
        new Date(this.state.timeContent.titleYear, this.state.timeContent.titleMonth, 1).getDay(),
        new Date(this.state.timeContent.titleYear, this.state.timeContent.titleMonth + 1, 0).getDate(),
        new Date(this.state.timeContent.titleYear, this.state.timeContent.titleMonth, 0).getDate()
      )
    });
  }

  onConfirm(item, index, event) {

    event.nativeEvent.stopImmediatePropagation();

    if (item.disabled) {
      return;
    }

    this.props.onSelect && this.props.onSelect(
      {
        year: item.year,
        month: item.month,
        date: item.value
      }
    );
  }

  render() {

    return (
      <div className={this.className("v-date-time-picker v-popper")} style={this.style()}>
        <div className="v-popper-content">
          <div className="v-title">
            <div className="v-year">
              <div className="v-leftYear" onClick={_ => this.onChangeTime(1)}>&lt;&lt;</div>
              <div className="v-leftMonth" onClick={_ => this.onChangeTime(2)}>&lt;</div>
              <div className="v-yearAndMonth">
                <span className="v-year">{this.state.timeContent && this.state.timeContent.titleYear}</span>
                <span> 年 </span>
                <span className="v-month">{this.state.timeContent && (this.state.timeContent.titleMonth + 1)}</span>
                <span> 月</span>
              </div>
              <div className="v-rightYear" onClick={_ => this.onChangeTime(3)}>&gt;</div>
              <div className="v-rightMonth" onClick={_ => this.onChangeTime(4)}>&gt;&gt;</div>
            </div>
            <div className="v-week">
              {this.params.weekList.map((item, index) => <div key={index}>{item}</div>)}
            </div>
          </div>

          <div className="v-content">
            {
              this.state.timeContent && this.state.timeContent.content.map(
                (item, index) =>
                  <div
                    key={index}
                    className={`
                      ${item.month !== this.state.timeContent.titleMonth && 'v-notSelfMonth' || ''}
                      ${item.disabled ? 'v-disabled' : 'v-canSelect'}
                      ${item.selected && 'v-selected' || ''}
                    `}
                    onClick={event => this.onConfirm(item, index, event)}
                  >
                    {item.value}
                  </div>
              )
            }
          </div>
        </div>
        <div className="v-popper-arrow"/>
      </div>
    );
  }
}


DatePicker.propTypes = {
  options: PropTypes.object,      // 配置
  selectedDate: PropTypes.object, // 当前选中的时间
  isUpdateTime: PropTypes.object, // 是否需要初始化数据
};

export default DatePicker;
