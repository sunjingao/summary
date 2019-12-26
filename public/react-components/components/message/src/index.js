import React from 'react';
import ReactDOM from 'react-dom';
import Alert from "../../alert/src/index";
import {setStyle} from "../../../src/utils/dom";
import getBoundingClient from "../../../../popper/utils/getBoundingClient";

let instances = [],   // 实例集合
  offset = 10,        // 偏移量
  defaultTime = 3000; // 默认展示时间

// 获得层级
let getZIndex = function () {
  return Popper.addZIndex();
};

// 实例注册函数
const register = function (val) {
  this.__proto__.instance = val;
};

// 获取props
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
    register: register.bind(instance),
  };
};

// 初始化位置
const initPosition = function () {

  let top = offset;

  for (let instance of Object.values(instances)) {

    setStyle(instance, 'top', `${top}px`);

    top = top + getBoundingClient(instance).height + offset;
  }
};

// 打开方法
const open = function () {

  instances.push(this.view);

  document.body.appendChild(this.view);

  initPosition();

  this.__proto__.timer = setTimeout(
    _ => {
      this.close();
    },
    this.timeout
  );
};

// 关闭方法
const close = function () {

  clearTimeout(this.timer);

  instances.splice(instances.indexOf(this.view), 1);

  document.body.removeChild(this.view);

  initPosition();
};

export default function (opt) {

  // 导出对象
  let messageIns = {};
  messageIns.__proto__ = {};

  let view = document.createElement('div');
  view.classList.add('v-message');
  view.style.zIndex = getZIndex();

  messageIns.__proto__.options = opt; // message 配置
  messageIns.__proto__.view = view; // message视图
  messageIns.__proto__.timeout = opt.timeout || defaultTime; // message 存在时间
  messageIns.open = open.bind(messageIns);   // 打开
  messageIns.close = close.bind(messageIns); // 关闭

  ReactDOM.render(
    React.cloneElement(<Alert/>, getProps(messageIns.options, messageIns)),
    messageIns.view
  );

  return messageIns;
};




