import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './message-box';
import Loading from "../../loading";

// 初始化传递给message-box的配置
const initInstance = function (options) {

  return {
    // message confirm prompt
    type: options.type,
    titleText: options.titleText,
    messageBoxClass: options.messageBoxClass,
    contentText: options.contentText,
    cancelButtonText: options.cancelButtonText,
    confirmButtonText: options.confirmButtonText,
    canCancel: options.canCancel ?
      function () {
        return options.canCancel.call(this, ...arguments);
      } :
      function () {
        return true
      },
    canConfirm: options.canConfirm ?
      function () {
        return options.canConfirm.call(this, ...arguments);
      } :
      function () {
        return true
      },
    canClose: options.canClose ?
      function () {
        return options.canClose.call(this, ...arguments);
      } :
      function () {
        return true
      },
    onClose: close.bind(this),
    onConfirm: options.onConfirm,
  };
};

// 打开 message-box
const open = function () {

  // 打开遮蔽罩
  this.loadingInstance.open();

  // 因为loading展示经过了setTimeout,为了让message-box图层在上，此处也使用setTimeout
  setTimeout(
    _ => {

      // 要先把内容添加到body上面，在渲染 instance。
      document.body.appendChild(this.outerView);

      ReactDOM.render(
        React.cloneElement(this.instance, this.options),
        this.outerView
      );
    }
  )
};

// 关闭 message-box
const close = function () {
  this.loadingInstance.close();
  document.body.removeChild(this.outerView);
};

// 绑定外部使用的方法
const bindCallBack = function () {
  this.open = open.bind(this);
  this.close = close.bind(this);
};

export default function (options) {

  // 导出对象
  let messageBox = {};
  messageBox.__proto__ = {};

  // 导出事件
  bindCallBack.call(messageBox);

  // 自定义内部属性
  messageBox.__proto__.options = initInstance.call(messageBox, options);
  messageBox.__proto__.outerView = document.createElement('div');
  messageBox.__proto__.instance = <MessageBox/>;
  messageBox.__proto__.loadingInstance = Loading({
    target: document.body,
    isShowLoadingIcon: false,
  });

  return messageBox;
};
