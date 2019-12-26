import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Rate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverIndex: -1,                         // 当前鼠标浮动元素的索引
      selectedIndex: this.props.selectNo - 1, // 当前选中元素的索引
    };
  }

  static getDerivedStateFromProps(props, state) {

    if (props.selectNo !== state.prevPropsSelectNo) {
      return {
        prevPropsSelectNo: props.selectNo,
        selectedIndex: props.selectNo - 1,
      };
    }

    return null;
  }

  // 是否展示选中颜色
  getIsShowColor(index) {
    if (this.props.scoreTemplate) {
      let selectNo = this.props.scoreTemplate - 1;
      return index <= selectNo || index - selectNo < 1;
    }
    else {
      return this.state.hoverIndex !== -1 ? index <= this.state.hoverIndex : index <= this.state.selectedIndex;
    }
  }

  // 获取部分选中时的宽度
  getWidth(index) {

    let no = this.props.scoreTemplate - 1;

    if (no - index < 0 && no - index > -1) {
      return `${(no + 1 - index) * 100}%`;
    } else {
      return '100%';
    }
  }

  // 改变浮动时触发
  onOver(hoverIndex) {

    if (this.props.scoreTemplate) {
      return;
    }

    this.setState({
      hoverIndex: hoverIndex
    });

    this.props.onHover && this.props.onHover(hoverIndex);
  }

  // 离开时触发
  onOut() {

    if (this.props.scoreTemplate) {
      return;
    }

    this.setState({
      hoverIndex: -1
    });
  }

  // 点击时触发
  onClick(index) {

    this.setState({
      selectedIndex: index,
    });

    this.props.onChange && this.props.onChange(index);
  }

  // icons部分内容
  renderIcons() {

    return Array.from({length: this.props.iconNo}).map(
      (item, index) => {

        let isShowColor = this.getIsShowColor(index);

        return <div key={index} className={"v-item"}>
          {
            this.props.scoreTemplate === undefined ?
              <div
                className={"v-rate-pointer"}
                onMouseOver={this.onOver.bind(this, index)}
                onClick={this.onClick.bind(this, index)}
              >
                <div
                  className={`
                    iconfont icon-rateDefault v-mr5
                    ${isShowColor && 'v-rate-item-select-color' || ''}
                  `}
                />
              </div> :
              <div className={"iconfont icon-rateDefault v-mr5"}>
                <div className={"v-item-score-select"}>
                  <div
                    className={`
                      iconfont icon-rateDefault v-hidden v-pa1
                      ${isShowColor && 'v-rate-item-select-color' || ''}
                    `}
                    style={{width: this.getWidth(index)}}
                  />
                </div>
              </div>
          }
        </div>
      });
  }

  render() {

    return (
      <div className={this.className('v-rate')} style={this.style()}>
        <div className={"v-rate-content"} onMouseOut={this.onOut.bind(this)}>
          {this.renderIcons()}
        </div>
        <span className="v-font">
            {this.props.text[this.state.hoverIndex === -1 ? this.state.selectedIndex : this.state.hoverIndex]}
        </span>
      </div>
    );
  }
}

Rate.defaultProps = {
  iconNo: 5,
  selectNo: 3,
  text: [],
};

Rate.propTypes = {
  iconNo: PropTypes.number,        // 数目总和
  selectNo: PropTypes.number,      // 默认选中数
  scoreTemplate: PropTypes.number, // 分数，（有值时，内容不可选中改变）
  text: PropTypes.array,           // 选中时展示的问题

  onHover: PropTypes.func,         // 浮动时，触发函数
  onChange: PropTypes.func,        // 改变状态时，触发函数
};

export default Rate;
