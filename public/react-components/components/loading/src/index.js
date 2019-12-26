import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './loading';
import {getStyle, setStyle} from "../../../src/utils/dom";

// 实例方法注册
const register = function (ins, view) {
  this.__proto__.loadingView = view;
};

// 实例props初始化
const initInstance = function (options) {

  return {
    opacity: 0,
    isShowLoadingIcon: options.isShowLoadingIcon === undefined ? true : options.isShowLoadingIcon,
    text: options.text || '',
    loadingClass: options.loadingClass || '',
    contentClass: options.contentClass || '',
    loadingComponent: options.loadingComponent || '',
    zIndex: getZIndex(),
    register: register.bind(this),
  }
};

// 初始化弹层位置
const initPosition = function () {

  let borderLeft = parseFloat(getStyle(this.target, 'border-left-width')) || 0,
    borderTop = parseFloat(getStyle(this.target, 'border-top-width')) || 0;

  if ([document.documentElement, document.body].includes(this.target)) {
    setStyle(this.loadingView, 'top', `${document.documentElement.scrollTop - borderTop}px`);
    setStyle(this.loadingView, 'left', `${document.documentElement.scrollLeft - borderLeft}px`);

    setStyle(this.loadingView, 'width', `${getBodyWidthOrHeight('width')}px`);
    setStyle(this.loadingView, 'height', `${getBodyWidthOrHeight('height')}px`);
  } else {

    let width = this.target.offsetWidth,
      height = this.target.offsetHeight;

    setStyle(this.loadingView, 'top', `${this.target.scrollTop - borderTop}px`);
    setStyle(this.loadingView, 'left', `${this.target.scrollLeft - borderLeft}px`);

    setStyle(this.loadingView, 'width', `${width}px`);
    setStyle(this.loadingView, 'height', `${height}px`);
  }
};

// 获得zIndex
const getZIndex = function () {
  return Popper.addZIndex();
};

// 获得全屏的高度或宽度
const getBodyWidthOrHeight = function (type) {

  const dom = document.createElement('div');

  type = type === 'width' ? 'Width' : 'Height';

  setStyle(dom, 'width', '100%');
  setStyle(dom, 'height', '100%');
  setStyle(dom, 'position', 'fixed');

  document.body.appendChild(dom);

  let typeWidthOrHeight = dom[`client${type}`];
  document.body.removeChild(dom);

  return typeWidthOrHeight;
};

// resize事件绑定
const bindResizeEvents = function () {
  window.addEventListener(
    'resize',
    this.resize
  );
};

// resize事件清除
const removeResizeEvents = function () {
  window.removeEventListener(
    'resize',
    this.resize
  );
};

// 开启遮罩
const open = function () {

  if (this.isOpen || !this.target) {
    return;
  }

  this.__proto__.isOpen = true;

  // 因为 zIndex 是动态改变的，所以要把获取参数放到这里。
  ReactDOM.render(
    React.cloneElement(this.instance, initInstance.call(this, this.defaultOptions)),
    this.containerView,
  );

  if (this.parentOriginalOverflow !== "hidden") {
    setStyle(this.target, 'overflow', 'hidden');
  }
  if (this.parentOriginalPosition === "static" || this.parentOriginalPosition === "") {
    setStyle(this.target, "position", "relative");
  }

  bindResizeEvents.call(this);

  this.target.appendChild(this.containerView);

  this.resize();

  setTimeout(
    _ => {
      // 增加动画效果
      ReactDOM.render(
        React.cloneElement(
          this.instance,
          Object.assign({}, initInstance.call(this, this.defaultOptions), {opacity: 1})
        ),
        this.containerView,
      );
    }
  )
};

// 关闭遮罩
const close = function () {

  if (!this.isOpen) {
    return;
  }

  this.__proto__.isOpen = false;

  removeResizeEvents.call(this);

  let transitionTime = getStyle(this.loadingView, 'transition-duration');
  transitionTime = transitionTime && parseFloat(transitionTime) * 1000 || 0;

  // 增加动画效果
  ReactDOM.render(
    React.cloneElement(
      this.instance,
      Object.assign({}, initInstance.call(this, this.defaultOptions), {opacity: 0})
    ),
    this.containerView,
  );

  setTimeout(
    _ => {

      if (this.parentOriginalOverflow !== getStyle(this.target, "overflow")) {
        setStyle(this.target, "overflow", this.parentOriginalOverflow);
      }
      if (this.parentOriginalPosition !== getStyle(this.target, "position")) {
        setStyle(this.target, "position", this.parentOriginalPosition);
      }

      this.target.removeChild(this.containerView);
    },
    transitionTime
  );
};

// 绑定回调事件
const bindCallBack = function (options) {
  this.open = open.bind(this);
  this.close = close.bind(this);
};

export default function (options) {

  // 自定义导出对象
  let loadingObj = {};
  loadingObj.__proto__ = {};

  // 向外暴露的方法赋值
  bindCallBack.call(loadingObj, options);

  // 私有方法属性赋值
  loadingObj.__proto__.defaultOptions = options; // 参数
  loadingObj.__proto__.target = typeof options.target === 'string' ?
    document.querySelector(options.target) : options.target; // 目标元素
  loadingObj.__proto__.isOpen = false; // 遮蔽罩是否处于展开状态
  loadingObj.__proto__.instance = <Loading/>; // loading 实例
  loadingObj.__proto__.parentOriginalOverflow = getStyle(loadingObj.target, "overflow"); // options的 overflow 属性
  loadingObj.__proto__.parentOriginalPosition = getStyle(loadingObj.target, "position"); // options的 position 属性
  loadingObj.__proto__.containerView = document.createElement('div'); // 先使用ReactDom.render,再使用appendChild的中间层元素
  // 每次 resize 更新位置
  loadingObj.__proto__.resize = () => {
    initPosition.call(loadingObj)
  };

  return loadingObj;
}
