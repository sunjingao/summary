import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Progress extends Component {

  // 获得展示的文字内容
  getShowText() {
    return this.props.format ? this.props.format(this.props.percentage) : `${this.props.percentage}%`;
  }

  // 获得type=line，完成部分的背景颜色
  getBgColor() {

    let colorType = typeof this.props.bgColor;

    switch (colorType) {
      case 'string':
        return this.props.bgColor;
      case 'object':
        let arr = [...this.props.bgColor].sort((a, b) => a.percentage - b.percentage);
        return arr.find(item => this.props.percentage <= item.percentage).bgColor;
      case 'function':
        return this.props.bgColor(this.props.percentage);
    }
  }

  // 获得type=circle，完成部分向右旋转的角度
  getLeftDeg() {

    let percentage = this.props.percentage - 50,
      deg = (percentage <= 0 ? 0 : (percentage / 50)) * 180;

    return `rotate(${deg}deg)`;
  }

  // 获得type=circle，完成部分向左旋转的角度
  getRightDeg() {

    let deg = (this.props.percentage > 50 ? 1 : this.props.percentage / 50) * 180;

    return `rotate(${deg}deg)`;
  }

  // 类型为line时，渲染的内容
  renderLine() {

    return (
      <div className="v-out-line" style={{width: `${this.props.width}px`, height: `${this.props.spacing}px`}}>
        <div className="v-line" style={{borderRadius: `${this.props.spacing / 2}px`}}>
          <div
            className="v-finished"
            style={{
              width: `${this.props.percentage}%`,
              height: `${this.props.spacing}px`,
              borderRadius: `${this.props.spacing / 2}px`,
              backgroundColor: this.getBgColor()
            }}
          >
          </div>
        </div>
        {
          this.props.textComponent ?
            <div className="v-text">
              {this.props.textComponent}
            </div> :
            <div
              className={`v-text ${this.props.textInside && 'v-inside' || ''}`}
              style={{
                width: `${this.props.textWidth}px`,
                left: this.props.textInside ? `calc(${this.props.percentage}% - ${this.props.textWidth + 10}px)` : 'auto'
              }}
            >
              {this.getShowText()}
            </div>
        }
      </div>
    )
  }

  // 类型为circle时，渲染的内容
  renderCircle() {

    return (
      <div className="v-circle" style={{width: `${this.props.diameter}px`, height: `${this.props.diameter}px`}}>
        <div
          className="v-inner"
          style={{
            width: `${this.props.diameter - this.props.spacing * 2}px`,
            height: `${this.props.diameter - this.props.spacing * 2}px`,
            marginTop: `${this.props.spacing}px`,
            marginLeft: `${this.props.spacing}px`
          }}
        >
        </div>

        <div className="v-right">
          <div
            className="v-rightFinish"
            style={{transform: this.getRightDeg(), backgroundColor: this.props.bgColor}}
          />
        </div>

        <div className="v-left">
          <div
            className="v-leftFinish"
            style={{transform: this.getLeftDeg(), backgroundColor: this.props.bgColor}}
          />
        </div>

        <div className="v-text">{this.getShowText()}</div>
      </div>
    )
  }

  render() {

    return (
      <div className={this.className('v-progress')} style={this.style()}>
        {this.props.type === 'line' ? this.renderLine() : this.renderCircle()}
      </div>
    );
  }
}

Progress.defaultProps = {
  type: 'line',
  percentage: 0,
  width: 400,
  spacing: 6,
  textWidth: 30,
  bgColor: '#409eff',
  diameter: 150,
};

Progress.propTypes = {
  type: PropTypes.oneOf(['line', 'circle']),                                         // 进度条类型
  percentage: PropTypes.number,                                                      // 当前进度
  width: PropTypes.number,                                                           // 线性和圆的进度条的间距
  spacing: PropTypes.number,                                                         // 间距
  format: PropTypes.func,                                                            // 自定义展示内容函数
  textWidth: PropTypes.number,                                                       // 线性进度条的描述内容宽度
  textInside: PropTypes.bool,                                                        // 线性滚动条的描述内容是否在内部
  bgColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.func]), // 选中时的背景颜色
  diameter: PropTypes.number,                                                        // 圆形进度条的半径
  textComponent: PropTypes.node,                                                     // 文字插槽内容
};

export default Progress;
