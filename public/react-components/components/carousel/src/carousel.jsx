import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';

class Carousel extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isHover: false, // 当前是否在hover中
    };

    this.params = {
      allItemNums: React.Children.count(this.props.children), // 索引条目
      intervalHandle: null, // 循环句柄
      childrenContent: [], // 子元素集合
      isMoving: false, // 当前是否在动画中
      beforeActiveIndex: -1, // 上一次激活索引
      activeIndex: this.props.initIndex, // 本次激活索引
    };

    this.ref = {
      content: React.createRef(),
      carousel: React.createRef(),
    };
  }

  componentDidMount() {

    this.props.isAutoplay && this.bindEvents();

    // 初始化激活元素的位置信息
    this.params.childrenContent[this.params.activeIndex].setLeftSize(0);
    this.params.childrenContent[this.params.activeIndex].show();
  }

  componentWillUnMount() {
    this.removeEvents();
  }

  // 是否展示上一张、下一张的箭头
  isShowArrow() {
    switch (this.props.arrow) {
      case 'always':
        return true;
      case 'hover':
        return this.state.isHover;
      case 'never':
        return false;
    }
  }

  // children实例集合设置
  setChildrenContent(key, item) {
    this.params.childrenContent[key] = item;
  }

  // 是否不允许移动
  isNotAllowMove(index) {
    return this.params.isMoving || this.params.beforeActiveIndex === this.params.activeIndex ||
      index === this.params.activeIndex;
  }

  // 移动操作
  move() {

    this.params.isMoving = true;

    let children = this.params.childrenContent,
      parentWith = this.ref.carousel.current.offsetWidth;

    if (this.params.beforeActiveIndex < this.params.activeIndex) {
      children[this.params.activeIndex].setLeftSize(parentWith);
    } else {
      children[this.params.activeIndex].setLeftSize(-parentWith);
    }

    children[this.params.activeIndex].show();

    requestAnimationFrame(
      _ => {
        requestAnimationFrame(
          _ => {

            if (this.params.beforeActiveIndex < this.params.activeIndex) {
              children[this.params.beforeActiveIndex].setLeftSize(-parentWith);
              children[this.params.activeIndex].setLeftSize(0);
            } else {
              children[this.params.beforeActiveIndex].setLeftSize(parentWith);
              children[this.params.activeIndex].setLeftSize(0);
            }

            setTimeout(
              _ => {
                children && children[this.params.beforeActiveIndex].hide();
                this.params.isMoving = false;
              },
              this.props.transition
            )
          }
        )
      }
    );

  }

  // 上一步
  prev() {

    if (this.isNotAllowMove()) {
      return;
    }

    this.params.beforeActiveIndex = this.params.activeIndex;

    this.params.activeIndex--;

    if (this.params.activeIndex === -1) {
      this.params.activeIndex = this.params.allItemNums - 1;
    }

    this.move();
  }

  // 下一步
  next() {

    if (this.isNotAllowMove()) {
      return;
    }

    this.params.beforeActiveIndex = this.params.activeIndex;

    this.params.activeIndex++;

    if (this.params.activeIndex === this.params.allItemNums) {
      this.params.activeIndex = 0;
    }

    this.move();
  }

  // 更新操作
  update() {
    this.next();
  }

  // 绑定事件
  bindEvents() {
    this.params.intervalHandle = setInterval(
      _ => {
        this.update();
      },
      this.props.interval
    )
  }

  // 移除事件
  removeEvents() {
    clearInterval(this.params.intervalHandle);
  }

  // 鼠标进入
  onMouseEnter(event) {

    if (this.state.isHover) {
      return;
    }

    if (this.props.isAutoplay) {
      this.removeEvents();
    }

    this.setState({
      isHover: true,
    });
  }

  // 鼠标离开
  onMouseLeave() {

    if (!this.state.isHover) {
      return;
    }

    if (this.props.isAutoplay) {
      this.bindEvents();
    }

    this.setState({
      isHover: false,
    });
  }

  // 点击上一步
  onPrevClick() {
    this.prev();
    this.props.onPrev && this.props.onPrev(this.params.activeIndex);
  }

  // 点击下一步
  onNextClick() {
    this.next();
    this.props.onNext && this.props.onNext(this.params.activeIndex);
  }

  // 点击指示器
  onLocate(index) {

    if (this.isNotAllowMove(index)) {
      return;
    }

    this.params.beforeActiveIndex = this.params.activeIndex;

    this.params.activeIndex = index;

    this.move();

    this.props.onLocate && this.props.onLocate(this.params.activeIndex);
  }

  // 鼠标进入指示器
  onIndicatorMouseEnter(index) {
    if (this.props.trigger === 'hover') {
      this.onLocate(index);
    }
  }

  render() {

    return (
      <div
        ref={this.ref.carousel}
        className={this.className('v-carousel')}
        style={{height: `${this.props.height}px`, ...this.style()}}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >

        <div className="v-content-part">
          <div ref={this.ref.content} className="v-content">
            {
              React.Children.map(
                this.props.children,
                (item, index) => {

                  if (!React.isValidElement(item) || item.type.elementName !== 'CarouselItem') {
                    return null;
                  }

                  return React.cloneElement(
                    item,
                    {
                      key: index,
                      parent: {
                        index: index,
                        transition: this.props.transition,
                        setChildrenContent: this.setChildrenContent.bind(this)
                      }
                    }
                  )
                }
              )
            }
          </div>
        </div>

        {
          this.isShowArrow() &&
          <div className="v-arrow-part">
            <div className="v-before" onClick={this.onPrevClick.bind(this)}>&lt;</div>
            <div className="v-next" onClick={this.onNextClick.bind(this)}>&gt;</div>
          </div>
        }

        {
          this.props.indicator !== 'none' &&
          <div className={`v-indicator-part v-${this.props.indicator}`}>
            {
              Array.from({length: this.params.allItemNums}).map(
                (item, index) =>
                  <div
                    key={index}
                    className="v-item"
                    onClick={_ => this.onLocate(index)}
                    onMouseEnter={_ => this.onIndicatorMouseEnter(index)}
                  >
                    <i className={`${this.params.activeIndex === index && 'is-active' || ''}`}/>
                  </div>
              )
            }
          </div>
        }
      </div>
    );
  }
}


Carousel.defaultProps = {
  isAutoplay: true,
  initIndex: 0,
  height: 300,
  trigger: 'hover',
  interval: 2000,
  transition: 500,
  indicator: 'inside',
  arrow: 'hover',
};

Carousel.propTypes = {
  isAutoplay: PropTypes.bool,                                // 是否自动切换
  initIndex: PropTypes.number,                               // 初始索引
  height: PropTypes.number,                                  // 高度
  trigger: PropTypes.oneOf(['click', 'hover']),              // 指示器触发方式
  interval: PropTypes.number,                                // 切换时间
  transition: PropTypes.number,                              // 动画完成时间
  indicator: PropTypes.oneOf(['outside', 'inside', 'none']), // 指示器位置
  arrow: PropTypes.oneOf(['always', 'hover', 'never']),      // 箭头切换方式

  onPrev: PropTypes.func,                                    // 点击上一张幻灯片
  onNext: PropTypes.func,                                    // 点击下一张幻灯片
  onLocate: PropTypes.func,                                  // 指示器触发
};

export default Carousel;
