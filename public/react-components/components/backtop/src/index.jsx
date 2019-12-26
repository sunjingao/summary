import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import {throttle} from "../../../src/utils/throttleAndDebounce";

class Backtop extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isShow: false,
    };

    this.params = {
      rootElement: null,    // 监控元素
      throttleUpdate: null, // update执行次数最小化
    };
  }

  componentDidMount() {

    this.initParams();

    this.bindEvents();

    this.update();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  // 获得zIndex
  getZIndex() {
    return Popper.addZIndex();
  }

  // 判断是否是根元素
  isRoot() {
    return this.props.selector.trim() === 'root';
  }

  // 初始化params数据
  initParams() {

    this.params.throttleUpdate = throttle(_ => this.update(), this.props.timeout).bind(this);

    let rootElement = this.isRoot() ? document.documentElement : document.querySelector(this.props.selector);
    this.params.rootElement = Array.isArray(rootElement) ? rootElement[0] : rootElement;
  }

  // 滚动
  scroll() {
    requestAnimationFrame(
      _ => {
        let scrollTop = this.params.rootElement.scrollTop;
        this.params.rootElement.scrollTop = scrollTop / 2;
        if (scrollTop <= 1) {
          this.params.rootElement.scrollTop = 0;
        }
        else {
          this.scroll();
        }
      }
    )
  }

  // 展示
  show() {

    if (this.state.isShow) {
      return;
    }

    this.setState({
      isShow: true
    });
  }

  // 隐藏
  hide() {

    if (!this.state.isShow) {
      return;
    }

    this.setState({
      isShow: false
    });
  }

  // 更新
  update() {
    this.params.rootElement.scrollTop > this.props.visibilityHeight ? this.show() : this.hide();
  }

  // 绑定事件
  bindEvents() {
    (this.isRoot() ? window : this.params.rootElement).addEventListener('scroll', this.params.throttleUpdate);
  }

  // 卸除事件绑定
  removeEvents() {
    (this.isRoot() ? window : this.params.rootElement).removeEventListener('scroll', this.params.throttleUpdate);
  }

  // 点击事件
  onClick(event) {

    this.scroll();

    this.props.onClick && this.props.onClick(event);
  }

  render() {

    let children = this.props.children ?
      this.props.children :
      <i className="iconfont icon-scroll-top"/>;

    return (
      <div
        className={this.className("v-backtop")}
        style={{
          right: `${this.props.right}px`,
          bottom: `${this.props.bottom}px`,
          zIndex: this.getZIndex(),
          display: this.state.isShow ? 'flex' : 'none',
          ...this.style()
        }}
        onClick={this.onClick.bind(this)}
      >
        {children}
      </div>
    );
  }
}

Backtop.defaultProps = {
  selector: 'root',
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
  timeout: 500,
};

Backtop.propTypes = {
  selector: PropTypes.string,         // 触发滚动的元素，如果使用页面作为根元素，可传root
  visibilityHeight: PropTypes.number, // 滚动高度达到此参数值才出现
  right: PropTypes.number,            // 页面右边距离
  bottom: PropTypes.number,           // 页面底部距离
  timeout: PropTypes.number,          // 节流时间

  onClick: PropTypes.func,            // 点击按钮时触发
};

export default Backtop;
