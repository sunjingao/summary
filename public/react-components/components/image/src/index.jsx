import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import {getStyle} from "../../../src/utils/dom"
import {throttle} from "../../../src/utils/throttleAndDebounce";

class Image extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isWaiting: false, // 加载中
      isError: false, // 加载失败
      isCorrect: false, // 加载成功
    };

    this.params = {
      scrollParent: null, // 滚动监听元素
      throttleUpdate: null, // 节流更新函数
    };

    this.ref = {
      root: React.createRef(),
      img: React.createRef(),
    };
  }

  componentDidMount() {

    if (!this.props.isLazy) {
      this.startDownLoadImg();
    }

    if (this.props.isLazy) {

      this.setScrollParent();

      this.setThrottleUpdate();

      this.bindLazyEvent();

      this.params.throttleUpdate();
    }
  }

  componentWillUnmount() {
    if (this.props.isLazy) {
      this.removeLazyEvent();
    }
  }

  // 初始化状态
  initSigns() {

    this.setState({
      isWaiting: true,
      isError: false,
      isCorrect: false,
    });
  }

  // 开始下载图片
  startDownLoadImg() {

    if (this.state.isWaiting || this.state.isError || this.state.isCorrect) {
      return;
    }

    let element = document.createElement('img');

    element.src = this.props.src;

    this.initSigns();

    this.bindEvents(element);
  }

  // 设置滚动父元素
  setScrollParent() {

    if (!this.props.scrollContainer) {

      let rootElements = [document, document.documentElement, document.body],
        scrollAttrs = ['auto', 'scroll'],
        parent = this.ref.root.current.parentNode;

      while (
        !scrollAttrs.includes(getStyle(parent, 'overflow')) &&
        !rootElements.includes(parent)
        ) {
        parent = parent.parentNode;
      }

      this.params.scrollParent = rootElements.includes(parent) ? document : parent;
    } else if (typeof this.props.scrollContainer === 'string') {
      this.params.scrollParent = document.querySelector(this.props.scrollContainer);
    } else {
      this.params.scrollParent = this.props.scrollContainer;
    }
  }

  // 加载成功
  onLoad() {

    this.setState({
      isCorrect: true,
      isWaiting: false,
      isError: false,
    });

    this.ref.img.current.setAttribute('src', this.props.src)
  }

  // 加载失败
  onError() {
    this.setState({
      isError: true,
      isWaiting: false,
      isCorrect: false,
    });
  }

  // 绑定事件
  bindEvents(element) {
    element.onload = this.onLoad.bind(this);
    element.onerror = this.onError.bind(this);
  }

  // 绑定懒加载事件
  bindLazyEvent() {
    this.params.scrollParent.addEventListener(
      'scroll',
      this.params.throttleUpdate
    )
  }

  // 移除懒加载事件
  removeLazyEvent() {
    this.params.scrollParent &&
    this.params.scrollParent.removeEventListener &&
    this.params.scrollParent.removeEventListener(
      'scroll',
      this.params.throttleUpdate
    )
  }

  // 懒加载更新函数
  lazyUpdate() {

    let clientRect = this.params.scrollParent.getBoundingClientRect(),
      currentEle = this.ref.root.current.getBoundingClientRect();

    if (
      currentEle.top - clientRect.bottom <= this.props.showHeight
    ) {
      this.startDownLoadImg();
    }
  }

  // 设置次数最小化执行句柄
  setThrottleUpdate() {
    this.params.throttleUpdate = throttle(this.lazyUpdate.bind(this), this.props.updateTimer);
  }

  render() {

    let children = null;

    if (this.state.isWaiting) {
      if (this.props.altComponent) {
        children = <div className="v-alt-part">
          {this.props.altComponent}
        </div>
      }
      else if (this.props.altText) {
        children = <div className="v-alt-part">{this.props.altText}</div>;
      }
    }
    else if (this.state.isError) {
      if (this.props.errorComponent) {
        children = <div className="v-error-part">
          {this.props.errorComponent}
        </div>
      }
      else if (this.props.errorText) {
        children = <div className="v-error-part">{this.props.errorText}</div>
      }
    }
    else {
      children = <img ref={this.ref.img} className="v-img-part" style={{objectFit: this.props.fit}}/>;
    }

    return (
      <div ref={this.ref.root} className={this.className('v-image')} style={this.style()}>
        {children}
      </div>
    );
  }
}

Image.defaultProps = {
  fit: 'fill',
  updateTimer: 500,
  showHeight: 50,
};

Image.propTypes = {
  isLazy: PropTypes.bool,                                                   // 是否懒加载
  fit: PropTypes.oneOf(['fill', 'contain', 'cover', 'none', 'scale-down']), // object-fit
  src: PropTypes.string,                                                    // 图片地址
  altText: PropTypes.string,                                                // 加载中展示的文字
  errorText: PropTypes.string,                                              // 错误时展示的文字
  scrollContainer: PropTypes.oneOf([[String, Object]]),                     // 滚动容器
  updateTimer: PropTypes.number,                                            // 节流时间
  showHeight: PropTypes.number,                                             // 当图形与scrollParent的地步的距离小于等于此值是，进行加载

  altComponent: PropTypes.node,                                             // 加载时插槽
  errorComponent: PropTypes.node,                                           // 错误插槽
};

export default Image;
