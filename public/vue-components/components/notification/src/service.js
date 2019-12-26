import Vue from "vue"
import '../css/notification.scss';
import Alert from "../../alert/src/alert.vue"
import {setStyle} from "../../../src/utils/dom"
import getBoundingClient from "../../../../popper/utils/getBoundingClient";

const vueView = Vue.extend(Alert);

// 位置有四种：右上角、右下角、左下角、左上角
const positionTypes = {
  rightTop: 'rightTop',
  rightBottom: 'rightBottom',
  leftBottom: 'leftBottom',
  leftTop: 'leftTop'
};

// 四中位置对应的集合
const instances = {
  rightTop: [],
  rightBottom: [],
  leftBottom: [],
  leftTop: [],
};

// 使用的样式类
const className = {
  base: 'v-notification', // 基本样式
  right: 'v-notification-right', // 右侧样式
  rightShow: 'v-notification-right-show', // 右侧展示样式
  left: 'v-notification-left', // 左侧样式
  leftShow: 'v-notification-left-show', // 左侧展示样式
};

// 上下两个组件之间的距离
const addOffset = 10;

const setZIndex = function () {
  this.zIndex = Popper.addZIndex();
};

const open = function () {

  setZIndex.call(this);

  setInstances.call(this);

  this.$el.classList.add(className.base);
  document.body.appendChild(this.$el);
  this.show();

  // 待对应的内容展示出来时。再把对应的样式加上去，实现变化
  this.$nextTick(
    () => {
      initPosition.call(this);
    }
  );

  this.timer = setTimeout(
    _ => {
      this.close();
    },
    this.timeout
  )
};

const close = function () {

  this.hide();
  clearTimeout(this.timer);

  removeInstance.call(this);

  initPosition.call(this);
};

const destroy = function () {
  this.$destroy();
};

const bindCallBack = function (instance) {
  instance.open = open.bind(instance);
  instance.close = close.bind(instance);
  instance.destroy = destroy.bind(instance);
};

const setInstances = function () {

  if (this.positionType === positionTypes.rightTop) {
    instances.rightTop.push(this);
    this.$el.classList.add(className.right);
  } else if (this.positionType === positionTypes.rightBottom) {
    instances.rightBottom.push(this);
    this.$el.classList.add(className.right);
  } else if (this.positionType === positionTypes.leftBottom) {
    instances.leftBottom.push(this);
    this.$el.classList.add(className.left);
  } else if (this.positionType === positionTypes.leftTop) {
    instances.leftTop.push(this);
    this.$el.classList.add(className.left);
  }
};

const removeInstance = function () {

  if (this.positionType === positionTypes.rightTop) {
    instances.rightTop.splice(instances.rightTop.indexOf(this), 1);
  } else if (this.positionType === positionTypes.rightBottom) {
    instances.rightBottom.splice(instances.rightBottom.indexOf(this), 1);
  } else if (this.positionType === positionTypes.leftBottom) {
    instances.leftBottom.splice(instances.leftBottom.indexOf(this), 1);
  } else if (this.positionType === positionTypes.leftTop) {
    instances.leftTop.splice(instances.leftTop.indexOf(this), 1);
  }
};

const initPosition = function () {

  let offset = this.offset;

  if (this.positionType === positionTypes.rightTop) {
    for (let instance of Object.values(instances.rightTop)) {
      setStyle(instance.$el, 'top', `${offset}px`);
      offset = offset + getBoundingClient(instance.$el).height + addOffset;

      this.$el.classList.add(className.rightShow);
    }
  } else if (this.positionType === positionTypes.rightBottom) {
    for (let instance of Object.values(instances.rightBottom)) {
      setStyle(instance.$el, 'bottom', `${offset}px`);
      offset = offset + getBoundingClient(instance.$el).height + addOffset;

      this.$el.classList.add(className.rightShow);
    }
  } else if (this.positionType === positionTypes.leftBottom) {
    for (let instance of Object.values(instances.leftBottom)) {
      setStyle(instance.$el, 'bottom', `${offset}px`);
      offset = offset + getBoundingClient(instance.$el).height + addOffset;

      this.$el.classList.add(className.leftShow);
    }
  } else if (this.positionType === positionTypes.leftTop) {
    for (let instance of Object.values(instances.leftTop)) {
      setStyle(instance.$el, 'top', `${offset}px`);
      offset = offset + getBoundingClient(instance.$el).height + addOffset;
      this.$el.classList.add(className.leftShow);
    }
  }
};

const initInstance = function (options) {

  return new vueView(
    {
      el: document.createElement("div"),
      props: {
        type: {
          validator: function (value) {
            return ['success', 'warning', 'tip', 'error'].includes(value);
          },
          default: options.type || 'tip'
        },
        title: {
          default: options.title || ''
        },
        closable: {
          default: options.closable || true
        }
      },
      data: {
        isShow: false,
        timer: null,
        timeout: options.timeout || 3000, // 停留时间
        offset: options.offset || addOffset, // 偏移固定轴距离
        positionType: options.positionType || positionTypes.rightTop, // 位置类型
      },
    }
  );
};

export default function (options) {

  let instance = initInstance(options);

  bindCallBack(instance);

  return instance;
}



