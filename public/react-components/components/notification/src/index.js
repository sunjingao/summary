import React from 'react';
import ReactDOM from 'react-dom';
import Alert from "../../alert/src/index";
import {setStyle} from "../../../src/utils/dom";
import getBoundingClient from "../../../../popper/utils/getBoundingClient";

// 实例集合
let instances = {
  leftTop: [],
  leftBottom: [],
  rightTop: [],
  rightBottom: [],
};

const positionTypes = {
    leftTop: 'leftTop',
    leftBottom: 'leftBottom',
    rightTop: 'rightTop',
    rightBottom: 'rightBottom',
  }, // 位置
  className = {
    base: 'v-notification',                       // 基本样式
    leftTop: 'v-notification-left',               // 左侧样式
    leftBottom: 'v-notification-left',            // 左侧样式
    rightTop: 'v-notification-right',             // 右侧样式
    rightBottom: 'v-notification-right',          // 右侧样式
    leftTopShow: 'v-notification-left-show',      // 左侧展示样式
    leftBottomShow: 'v-notification-left-show',   // 左侧展示样式
    rightTopShow: 'v-notification-right-show',    // 右侧展示样式
    rightBottomShow: 'v-notification-right-show', // 右侧展示样式
  }, // 样式
  offset = 10, // 偏移量
  defaultTime = 3000; // 默认展示时间

// 获得层级
let getZIndex = function () {
  return Popper.addZIndex();
};

// 获取 props
const getProps = function (opt, instance) {
  return {
    type: opt.type || 'tip',
    isPlain: opt.isPlain === undefined ? true : opt.isPlain,
    isClosable: opt.isClosable === undefined ? true : opt.isClosable,
    isShowIcon: opt.isShowIcon === undefined ? true : opt.isShowIcon,
    isTextCenter: opt.isTextCenter === undefined ? false : opt.isTextCenter,
    closeText: opt.closeText || '',
    titleText: opt.titleText || '',
    titleComponent: opt.titleComponent || '',
    descriptionText: opt.descriptionText || '',
    descriptionComponent: opt.descriptionComponent || '',
    closeComponent: opt.closeComponent || '',
    onClose: close.bind(instance),
  };
};

// 初始化位置
const initAndAddInstance = function () {

  let baseOffset = this.offset,
    topOrBottom = this.positionType.includes('Top') ? 'top' : 'bottom';

  this.view.classList.add(className.base, className[this.positionType]);

  for (let instance of Object.values(instances[this.positionType])) {
    setStyle(instance.view, topOrBottom, `${baseOffset}px`);
    baseOffset = baseOffset + this.offset + getBoundingClient(instance.view).height;
    instance.view.classList.add(className[`${this.positionType}Show`]);
  }
};

// 从实例集合中去除
const removeInstance = function () {
  instances[this.positionType].splice(instances[this.positionType].indexOf(this), 1);
};

// 展示
const open = function () {

  instances[this.positionType].push(this);

  document.body.appendChild(this.view);

  initAndAddInstance.call(this);

  this.__proto__.timer = setTimeout(
    _ => {
      this.close();
    },
    this.timeout
  );
};

// 关闭
const close = function () {

  clearTimeout(this.timer);

  removeInstance.call(this);

  document.body.removeChild(this.view);

  initAndAddInstance.call(this);
};

export default function (opt) {

  let messageIns = {};
  messageIns.__proto__ = {};

  let view = document.createElement('div');
  view.style.zIndex = getZIndex();

  messageIns.__proto__.options = opt;                                             // message 配置
  messageIns.__proto__.view = view;                                               // message 视图
  messageIns.__proto__.offset = opt.offset || offset;                             // message 上下两个组件之间的距离
  messageIns.__proto__.timeout = opt.timeout || defaultTime;                      // message 存在时间
  messageIns.__proto__.positionType = opt.positionType || positionTypes.rightTop; // message 存在时间

  messageIns.open = open.bind(messageIns);                                        // 打开事件
  messageIns.close = close.bind(messageIns);                                      // 关闭事件

  ReactDOM.render(
    React.cloneElement(<Alert/>, getProps(messageIns.options, messageIns)),
    messageIns.view
  );

  return messageIns;
};
