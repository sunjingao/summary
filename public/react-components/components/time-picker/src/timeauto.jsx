import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class TimeAuto extends Component {

  constructor(props) {

    super(props);

    this.state = {
      dataList: this.getDataList(),
      // 各个时间部分的scrollTop
      eleScrollTop: {
        startTime_hourTop: 0,
        endTime_hourTop: 0,
        startTime_minuteTop: 0,
        endTime_minuteTop: 0,
        startTime_secondTop: 0,
        endTime_secondTop: 0
      },
    };

    this.params = {
      itemContentWidth: this.props.itemWidth - this.scrollBarWidth(),
      timeout: 100,
    };

    this.ref = {
      timeauto: React.createRef(),
      timeautoUlstartTime_hour: React.createRef(),
      timeautoUlstartTime_minute: React.createRef(),
      timeautoUlstartTime_second: React.createRef(),
      timeautoUlendTime_hour: React.createRef(),
      timeautoUlendTime_minute: React.createRef(),
      timeautoUlendTime_second: React.createRef(),
    };
  }

  componentDidMount() {

    this.props.register(
      {

        initDatas: function () {

          this.setState({
            dataList: this.getDataList()
          });

          this.scrollToSelect();
        }.bind(this),

        onConfirm: this.onConfirm.bind(this),

        onCancel: this.onCancel.bind(this),
      },
      this.ref.timeauto.current
    );
  }

  // 获得滚动条宽度
  scrollBarWidth() {

    let eleOuter = document.createElement('div');

    eleOuter.style.width = '20px';
    eleOuter.style.height = '20px';
    eleOuter.style.overflow = 'scroll';
    eleOuter.classList.add('v-scroll-test'); // 展示当前滚动条
    eleOuter.style.position = 'absolute';
    eleOuter.style.top = '0';
    eleOuter.style.left = '0';
    eleOuter.style.zIndex = '-9999';
    eleOuter.style.visibility = 'hidden';

    document.body.appendChild(eleOuter);

    let scrollBarWidth = eleOuter.offsetWidth - eleOuter.clientWidth;
    document.body.removeChild(eleOuter);
    return scrollBarWidth;
  }

  // 判断forbiddenSelected标识的true or false
  isForbidden(startOrEndTag, hMsTag, index) {

    if (!this.props.timeRange ||
      !this.props.timeRange[startOrEndTag] ||
      !this.props.timeRange[startOrEndTag][hMsTag] ||
      !this.props.timeRange[startOrEndTag][hMsTag].some(x => x.start && x.end)
    ) {
      return false;
    }

    return !this.props.timeRange[startOrEndTag][hMsTag].some(x => {
      return x.start <= index && x.end >= index;
    })
  }

  // 是否可以显示hover时的背景颜色
  canHover(startOrEndPart, timePart, index) {

    let item = this.state.dataList[startOrEndPart][timePart][index];
    return !item.forbiddenSelected && !item.selected && item.value !== '';
  }

  // 判断元素是否禁止选择
  checkIsForBidden(obj) {
    return !obj || obj.forbiddenSelected || !obj.value;
  }

  // 判断select标识的true or false
  selectAndClassObj(startOrEndTag, hMsTag, value) {
    return {
      selected: this.props.changeTime[startOrEndTag][hMsTag] === value,
      class: this.props.changeTime[startOrEndTag][hMsTag] === value ? "v-selected" : ""
    };
  }

  // 获得dataList
  getDataList() {

    let dataList = {
      startTime: {
        hour: [],
        minute: [],
        second: []
      },
      endTime: {
        hour: [],
        minute: [],
        second: []
      }
    };

    for (let startOrEndTag in dataList) {
      for (let hMsTag in dataList[startOrEndTag]) {
        if (dataList[startOrEndTag].hasOwnProperty(hMsTag)) {
          let timeArr = [],
            max = hMsTag === "hour" ? 24 : 60,
            nullTimeObj = {value: null, class: '', forbiddenSelected: false, selected: false};

          for (let index = 0; index < max; index++) {

            let value = index < 10 ? "0" + index : index.toString(),
              selectAndClassObj = this.selectAndClassObj(startOrEndTag, hMsTag, value);
            timeArr.push({
              value: value,
              class: selectAndClassObj.class,
              forbiddenSelected: this.isForbidden(startOrEndTag, hMsTag, index),
              selected: selectAndClassObj.selected
            });
          }

          // 尅个时间段的开头和结尾的展示都有两个空
          timeArr.unshift(nullTimeObj, nullTimeObj);
          timeArr.push(nullTimeObj, nullTimeObj);

          dataList[startOrEndTag][hMsTag] = timeArr;
        }
      }
    }

    return dataList;
  }

  // 自动旋转至选中的部分
  scrollToSelect() {

    for (let [startOrEndIndex, startOrEndObj] of Object.entries(this.state.dataList)) {

      if (startOrEndIndex !== "endTime" || this.props.isShowEndTime) {
        for (let [hMsIndex, hMsObj] of Object.entries(startOrEndObj)) {
          hMsObj.forEach((v, timeIndex) => {
            if (v.selected) {
              this.ref[`timeautoUl${startOrEndIndex}_${hMsIndex}`].current.scrollTop = (timeIndex - 2) * this.props.itemHeight;
            }
          })
        }
      }
    }
  }

  // 判断是否被选中的部分是否应该自适应
  adaptJudge(timeDirection, value) {
    setTimeout(
      _ => {
        value === this.state.eleScrollTop[timeDirection + "Top"] && this.adaptPosition(timeDirection);
      },
      this.params.timeout
    )
  }

  // 改变被选中部分的颜色
  changeSelectedClass(time) {

    let timeArr = time.split('_');
    this.state.dataList[timeArr[0]][timeArr[1]].forEach(x => {
      x.class = "";
      x.selected = false;
    });

    let changeClassObj = this.state.dataList[timeArr[0]][timeArr[1]][(this.ref['timeautoUl' + time].current.scrollTop) / this.props.itemHeight + 2];

    if (!changeClassObj.forbiddenSelected) {
      changeClassObj.class = "v-selected";
      changeClassObj.selected = true;
    }
  }

  // 被选中部分的自适应
  adaptPosition(timeDirection) {

    let itemHeight = this.props.itemHeight,
      newVal = this.state.eleScrollTop[timeDirection + "Top"];

    if (newVal % itemHeight > itemHeight / 2) {
      this.ref['timeautoUl' + timeDirection].current.scrollTop += itemHeight - newVal % itemHeight;
    }
    else if (newVal % itemHeight < itemHeight / 2 && newVal % itemHeight !== 0) {
      this.ref['timeautoUl' + timeDirection].current.scrollTop -= newVal % itemHeight;
    }
    else if (newVal % itemHeight === 0) {
      this.changeSelectedClass(timeDirection)
    }
  }

  // 滚动时，对eleScrollTop中相关的内容赋值
  onScroll(content) {

    let element = this.ref['timeautoUl' + content].current;
    this.state.eleScrollTop[content + 'Top'] = element.scrollTop;

    switch (content + 'Top') {
      case 'startTime_hourTop':
        this.adaptJudge("startTime_hour", element.scrollTop);
        break;
      case 'startTime_minuteTop':
        this.adaptJudge("startTime_minute", element.scrollTop);
        break;
      case 'startTime_secondTop':
        this.adaptJudge("startTime_second", element.scrollTop);
        break;
      case 'endTime_hourTop':
        this.adaptJudge("endTime_hour", element.scrollTop);
        break;
      case 'endTime_minuteTop':
        this.adaptJudge("endTime_minute", element.scrollTop);
        break;
      case 'endTime_secondTop':
        this.adaptJudge("endTime_second", element.scrollTop);
        break;
    }
  }

  // 点击相关条目
  onClickLi(startOrEndPart, timePart, index) {

    if (this.state.dataList[startOrEndPart][timePart][index].forbiddenSelected) {
      return;
    }

    this.ref['timeautoUl' + startOrEndPart + '_' + timePart].current.scrollTop = this.props.itemHeight * (index - 2);
  }

  // 确认时的处理
  onConfirm(event) {

    event.nativeEvent.stopImmediatePropagation();

    let startTimeHour = this.state.dataList.startTime.hour.find(item => item.selected),
      startTimeMinute = this.state.dataList.startTime.minute.find(item => item.selected),
      startTimeSecond = this.state.dataList.startTime.second.find(item => item.selected),
      endTimeHour = !!this.props.isShowEndTime && this.state.dataList.endTime.hour.find(item => item.selected),
      endTimeMinute = !!this.props.isShowEndTime && this.state.dataList.endTime.minute.find(item => item.selected),
      endTimeSecond = !!this.props.isShowEndTime && this.state.dataList.endTime.second.find(item => item.selected),
      allTime = {
        startTime: {
          hour: startTimeHour && startTimeHour.value,
          minute: startTimeMinute && startTimeMinute.value,
          second: startTimeSecond && startTimeSecond.value
        },
        endTime: {
          hour: endTimeHour && endTimeHour.value,
          minute: endTimeMinute && endTimeMinute.value,
          second: endTimeSecond && endTimeSecond.value
        }
      };

    if (
      this.checkIsForBidden(startTimeHour) ||
      this.checkIsForBidden(startTimeMinute) ||
      this.checkIsForBidden(startTimeSecond) ||
      (!!this.isShowEndTime &&
        (
          this.checkIsForBidden(endTimeHour) ||
          this.checkIsForBidden(endTimeMinute) ||
          this.checkIsForBidden(endTimeSecond)
        )
      )
    ) {
      return;
    }

    this.props.autoComplete && this.props.autoComplete(
      this.props.isShowEndTime ? allTime : {startTime: allTime.startTime}
    );
  }

  // 取消时的处理
  onCancel(event) {
    event.nativeEvent.stopImmediatePropagation();
    this.props.autoClose && this.props.autoClose();
  }

  renderGetContent(startOrEndTimeKey, startOrEndTimeObj) {

    let returnArray = [];

    for (let [hourOrMinuteOrSecondKey, hourOrMinuteOrSecondObj] of Object.entries(startOrEndTimeObj)) {

      returnArray.push(
        <ul
          key={hourOrMinuteOrSecondKey}
          ref={this.ref['timeautoUl' + startOrEndTimeKey + '_' + hourOrMinuteOrSecondKey]}
          className="v-hourOrMinuteOrSecond-part_ul v-hover-show-scrollbar"
          style={{
            height: `${this.props.itemHeight * 5}px`,
            lineHeight: `${this.props.itemHeight}px`,
            width: `${this.props.itemWidth}px`
          }}
          onScroll={_ => this.onScroll(startOrEndTimeKey + '_' + hourOrMinuteOrSecondKey)}
        >
          {
            hourOrMinuteOrSecondObj.map(
              (item, itemIndex) =>
                <li
                  key={itemIndex}
                  className={`
                      ${item.class || ''}
                      ${item.forbiddenSelected && 'v-forbiddenSelected' || ''}
                      ${this.canHover(startOrEndTimeKey, hourOrMinuteOrSecondKey, itemIndex) && 'v-overClass' || ''}
                    `}
                  style={{
                    height: `${this.props.itemHeight}px`,
                    width: `${this.params.itemContentWidth}px`,
                  }}
                  onClick={_ => this.onClickLi(startOrEndTimeKey, hourOrMinuteOrSecondKey, itemIndex)}
                >
                  {item.value}
                </li>
            )
          }
        </ul>
      )
    }

    return returnArray;
  }

  render() {

    let timeAreaContent = [], key = 1;

    for (let [startOrEndTimeKey, startOrEndTimeObj] of Object.entries(this.state.dataList)) {

      timeAreaContent.push(
        (startOrEndTimeKey === 'startTime' || this.props.isShowEndTime) &&
        <div key={key++} className="v-startOrEnd-part">
          {
            this.props.isShowEndTime &&
            <div className="v-start-or-end-part_title">
              {startOrEndTimeKey === 'startTime' && <span>开始时间</span>}
              {startOrEndTimeKey === 'endTime' && <span>结束时间</span>}
            </div>
          }
          <div
            className={`
              v-hourAndMinuteAndSecond-part
              ${this.props.isShowEndTime ? 'v-showBorder' : 'v-showBottomBorder'}
              ${this.props.isShowEndTime && startOrEndTimeKey === 'endTime' ? 'v-ml10' : ''}
            `}
          >
            {
              this.renderGetContent(startOrEndTimeKey, startOrEndTimeObj)
            }
          </div>
        </div>
      );
    }

    return (

      <div ref={this.ref.timeauto} className={this.className('v-timeauto', 'v-popper')} style={this.style()}>

        <div className="v-popper-content">

          <div className={`v-time-area ${this.props.isShowEndTime && 'v-p5' || ''}`}>
            {timeAreaContent}
          </div>

          <div className="v-button-area">
            <span className="cancel" onClick={this.onCancel.bind(this)}>取消</span>
            <span className="v-confirm" onClick={this.onConfirm.bind(this)}>确定</span>
          </div>

        </div>

        <div className="v-popper-arrow"/>

      </div>
    );
  }
}

TimeAuto.defaultProps = {
  itemWidth: 50,
  itemHeight: 30,
};

TimeAuto.propTypes = {
  timeRange: PropTypes.object,   // 时间范围
  changeTime: PropTypes.object,  // 被选中的时间
  isShowEndTime: PropTypes.bool, // 是否展示结束时间
  itemWidth: PropTypes.number,   // 宽度
  itemHeight: PropTypes.number,  // 滚动范围item高度
  register: PropTypes.func,      // 注册函数
};

export default TimeAuto;
