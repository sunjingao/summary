import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import Tooltip from '../../tooltip/index';

const CIRCULEWIDTH = 14; // 可移动的球体的宽度

// 偶尔也会出现值不是整数的情况
class Slider extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isHover: false, // 当前鼠标是否浮动在滚动球上
      isMoving: false, // 当前是否在移动状态
      circularLeft: this.initCircularLeft(), // 球体距离左侧的百分比
      finishedWidth: this.initFinishedLeft(), // 已完成的进度条的百分比
    };

    this.params = {

      timer: null,
      onMoveHandler: this.move.bind(this), // 移动函数的句柄
      onMoveEndHandler: this.moveEnd.bind(this), // 移动结束时的句柄
      tooltipContent: String(this.props.value), // tooltip展示的内容

      stopsArray: this.initStopsArray(), // 当showStops为真时，记录间隔点位置集合
      rangeArray: this.initRangeArray(), // 起始点到截止点中所有有效的值集合
    };

    this.ref = {
      root: React.createRef(),
      tooltip: React.createRef(),
    };
  }

  // 球体距离左侧的百分比
  initCircularLeft() {
    let percent = (this.props.value - this.props.min) / (this.props.max - this.props.min) * 100;
    return `calc(${percent}% - ${CIRCULEWIDTH / 2}px)`;
  }

  // 已完成的进度条的百分比
  initFinishedLeft() {
    let percent = (this.props.value - this.props.min) / (this.props.max - this.props.min) * 100;
    return `${percent}%`;
  }

  // 当showStops为真时，记录间隔点位置集合
  initStopsArray() {

    let stopsArray = [],
      len = (this.props.max - this.props.min) / this.props.step;

    for (let index = 1; index < len; index++) {
      stopsArray.push(
        {
          left: `calc(${index * this.props.step}% - ${CIRCULEWIDTH / 2}px)`
        }
      );
    }

    return stopsArray;
  }

  // 起始点到截止点中所有有效的值集合
  initRangeArray() {

    let rangeArray = [];
    for (let index = this.props.min; index <= this.props.max; index += this.props.step) {
      rangeArray.push(index);
    }
    return rangeArray;
  }

  // 获取当前百分比
  getPercent(point) {
    return (point - this.props.min) / (this.props.max - this.props.min) * 100;
  }

  // 获得当前处理后的数值
  getCurrentPoint(val) {

    let emitValue = (this.props.max - this.props.min) * val + this.props.min;

    if (!this.params.rangeArray.includes(emitValue)) {

      this.params.rangeArray.every(
        (value, index) => {
          if (index === 0 && emitValue <= value) {
            emitValue = value;
            return false;
          } else if (index === this.params.rangeArray.length - 1 && emitValue >= value) {
            emitValue = value;
            return false;
          } else if (emitValue > value && emitValue < this.params.rangeArray[index + 1]) {
            emitValue = emitValue - value >= this.params.rangeArray[index + 1] - emitValue ?
              this.params.rangeArray[index + 1] : value;
            return false
          }
          return true;
        }
      )
    }

    return emitValue;
  }

  // 获得 tooltip 的提示内容
  getTipContent(percent) {

    let content = '';
    if (this.props.formatTooltip) {
      content = String(this.props.formatTooltip(percent));
    } else {
      content = String(percent);
    }

    return content;
  }

  // 是否展示 tooltip
  isShowToolTip() {
    return this.props.isShowTooltip && (this.state.isHover || this.state.isMoving);
  }

  // 向外触发函数
  emit(val) {

    // 为了避免 moveEnd 和 jump同时触发，在此处进行处理，使之触发一次。（当鼠标一直在滚动球上时，会出现上面的情况）
    if (this.params.timer) {
      return;
    }

    this.params.timer = setTimeout(
      _ => {

        this.params.timer = null;

        this.props.onChange && this.props.onChange(val);
      },
      50
    )
  }

  tooltipShow() {
    this.ref.tooltip.current && this.ref.tooltip.current.show();
  }

  tooltipHide() {
    this.ref.tooltip.current && this.ref.tooltip.current.hide();
  }

  move(event) {

    if (!this.state.isMoving) {
      return;
    }

    this.tooltipShow();

    requestAnimationFrame(
      _ => {

        let fatherRect = this.ref.root.current.getBoundingClientRect();

        let finishedPercent = 0;

        if (event.pageX >= fatherRect.left && event.pageX <= fatherRect.right) {
          finishedPercent = (event.pageX - fatherRect.left) / fatherRect.width;
        } else if (event.pageX > fatherRect.right) {
          finishedPercent = 1;
        } else if (event.pageX < fatherRect.left) {
          finishedPercent = 0;
        }

        let currentPoint = this.getCurrentPoint(finishedPercent),
          percent = this.getPercent(currentPoint);

        this.setState({
          circularLeft: `calc(${percent}% - ${CIRCULEWIDTH / 2}px)`,
          finishedWidth: `${percent}%`,
        });
        this.params.tooltipContent = this.getTipContent(currentPoint);
      }
    );
  }

  moveEnd(event) {

    if (!this.state.isHover) {
      this.tooltipHide();
    }

    let fatherRect = this.ref.root.current.getBoundingClientRect(),
      currentPoint = this.getCurrentPoint((event.pageX - fatherRect.left) / fatherRect.width);

    this.setState({
      isMoving: false,
    });

    this.params.tooltipContent = this.getTipContent(currentPoint);

    this.removeEvents();

    this.emit(currentPoint);
  }

  bindEvents() {

    document.addEventListener(
      'mousemove',
      this.params.onMoveHandler
    );

    document.addEventListener(
      'mouseup',
      this.params.onMoveEndHandler
    );
  }

  removeEvents() {

    document.removeEventListener(
      'mousemove',
      this.params.onMoveHandler
    );

    document.removeEventListener(
      'mouseup',
      this.params.onMoveEndHandler
    );
  }

  onMouseEnter() {

    this.setState({
      isHover: true
    });

    this.tooltipShow();
  }

  onMoveStart() {

    if (this.props.isDisabled) {
      return;
    }

    this.setState({
      isMoving: true
    });

    this.bindEvents();
  }

  onMouseLeave() {

    this.setState({
      isHover: false
    });

    this.tooltipHide();
  }

  onJump(event) {

    if (this.props.isDisabled) {
      return;
    }

    let fatherRect = this.ref.root.current.getBoundingClientRect();

    if (event.pageX >= fatherRect.left && event.pageX <= fatherRect.right) {

      let percent = (event.pageX - fatherRect.left) / fatherRect.width,
        currentPoint = this.getCurrentPoint(percent);

      percent = this.getPercent(currentPoint);

      this.setState({
        circularLeft: `calc(${percent}% - ${CIRCULEWIDTH / 2}px)`,
        finishedWidth: `${percent}%`,
      });

      this.params.tooltipContent = this.getTipContent(currentPoint);

      this.emit(currentPoint);
    }
  }

  render() {

    return (
      <div
        ref={this.ref.root}
        className={this.className('v-slider')}
        style={this.style()}
        onClick={this.onJump.bind(this)}
      >

        <div
          className={`v-finished-part ${this.props.isDisabled && 'v-disabled' || ''}`}
          style={{width: this.state.finishedWidth}}
        />

        {
          this.props.isShowTooltip ?
            <div
              className={`
                v-circular-part
                ${this.state.isMoving && 'v-isMoving' || ''}
                ${this.state.isHover && 'v-isHover' || ''}
                ${this.props.isDisabled && 'v-disabled' || ''}
              `}
              style={{left: this.state.circularLeft}}
              onMouseDown={this.onMoveStart.bind(this)}
              onMouseEnter={this.onMouseEnter.bind(this)}
              onMouseLeave={this.onMouseLeave.bind(this)}
            >
              <Tooltip
                ref={this.ref.tooltip}
                placement="top"
                isDisabled={!this.isShowToolTip()}
                content={this.params.tooltipContent}
              >
                <div className="v-tooltip-reference"/>
              </Tooltip>
            </div> :
            <div
              className={`
                v-circular-part
                ${this.state.isMoving && 'v-isMoving' || ''}
                ${this.props.isDisabled && 'v-disabled' || ''}
              `}
              style={{left: this.state.circularLeft}}
              onMouseDown={this.onMoveStart.bind(this)}
            />
        }

        {
          (this.props.isShowStops || this.props.marks.length > 0) && (

            <div className="v-stop-part">
              {
                this.props.marks.length > 0 ?
                  this.props.marks.map(
                    (item, index) =>
                      <div
                        key={index}
                        className="v-item"
                        style={{left: item.left}}
                      >
                        <div className="v-mark-html" dangerouslySetInnerHTML={{__html: item.value}}/>
                      </div>
                  )
                  :
                  this.params.stopsArray.map(
                    (item, index) =>
                      <div
                        key={index}
                        className="v-item"
                        style={{left: item.left}}
                      />
                  )
              }
            </div>
          )
        }
      </div>
    );
  }
}

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  isShowTooltip: true,
  marks: [],
};

Slider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 初始值
  isDisabled: PropTypes.bool,                                       // 禁止操作
  isShowTooltip: PropTypes.bool,                                    // 是否展示tooltip
  isShowStops: PropTypes.bool,                                      // 将每点展示出来
  min: PropTypes.number,                                            // 最小值
  max: PropTypes.number,                                            // 最大值
  step: PropTypes.number,                                           // 间距
  formatTooltip: PropTypes.func,                                    // tooltip内容自定义
  marks: PropTypes.array,                                           // tooltip自定义

  onChange: PropTypes.func,                                         // 点击或滑动结束后触发
};

export default Slider;
