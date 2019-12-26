import Vue from "vue"
import Loading from "./loading.vue"
import {getStyle, setStyle} from "../../../src/utils/dom"

const vueView = Vue.extend(Loading);

const setZIndex = function () {
  this.zIndex = Popper.addZIndex();
};

const isOpen = function (instance) {
  return instance.parent && instance.parent.contains(instance.$el);
};

const initInstance = function (options) {

  return new vueView({
    el: document.createElement("div"),
    data: function () {
      return {
        showLoadingIcon: options.showLoadingIcon === undefined ? true : options.showLoadingIcon,
        text: options.text || '',
        loadingClass: options.loadingClass || '',
        contentClass: options.contentClass || '',
        componentName: options.componentName
      }
    }
  });
};

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

const initPosition = function () {

  let borderLeft = parseFloat(getStyle(this.parent, 'border-left-width')) || 0;
  let borderTop = parseFloat(getStyle(this.parent, 'border-top-width')) || 0;

  if ([document.documentElement, document.body].includes(this.parent)) {

    setStyle(this.$el, 'top', `${document.documentElement.scrollTop - borderTop}px`);
    setStyle(this.$el, 'left', `${document.documentElement.scrollLeft - borderLeft}px`);

    setStyle(this.$el, 'width', `${getBodyWidthOrHeight('width')}px`);
    setStyle(this.$el, 'height', `${getBodyWidthOrHeight('height')}px`);
  } else {

    let width = this.parent.offsetWidth,
      height = this.parent.offsetHeight;

    setStyle(this.$el, 'top', `${this.parent.scrollTop - borderTop}px`);
    setStyle(this.$el, 'left', `${this.parent.scrollLeft - borderLeft}px`);

    setStyle(this.$el, 'width', `${width}px`);
    setStyle(this.$el, 'height', `${height}px`);
  }
};

const bindResizeEvents = function () {

  this.resize = () => {
    requestAnimationFrame(
      _ => initPosition.call(this)
    );
  };

  window.addEventListener(
    'resize',
    this.resize
  );
};

const removeResizeEvents = function () {

  window.removeEventListener(
    'resize',
    this.resize
  );
};

// 延时设置opacity属性，展示动画效果
const addAnimation = function (instance) {
  instance.opacity = 1;
};

// 延时设置opacity属性，展示动画效果
const removeAnimation = function (instance) {
  instance.opacity = 0;
};

const open = function (options) {

  this.parent = options.target;

  if (isOpen(this)) {
    return;
  }

  this.parentOriginalOverflow = getStyle(this.parent, "overflow");
  this.parentOriginalPosition = getStyle(this.parent, "position");

  if (this.parentOriginalOverflow !== "hidden") {
    setStyle(this.parent, 'overflow', 'hidden');
  }
  if (this.parentOriginalPosition === "static" || this.parent.parentOriginalPosition === "") {
    setStyle(this.parent, "position", "relative");
  }

  setZIndex.call(this);

  initPosition.call(this);

  bindResizeEvents.call(this);

  requestAnimationFrame(
    _ => {

      if (this.parent) {

        this.parent.appendChild(this.$el);

        requestAnimationFrame(
          _ => {
            // 增加opacity动画
            addAnimation(this);
          }
        )
      }
    }
  )
};

const close = function () {

  removeResizeEvents.call(this);

  if (isOpen(this)) {

    let transitionTime = getStyle(this.$el, 'transition-duration');
    transitionTime = transitionTime && parseFloat(transitionTime) * 1000 || 0;

    removeAnimation(this);

    setTimeout(
      _ => {

        if (this.parentOriginalOverflow !== getStyle(this.parent, "overflow")) {
          setStyle(this.parent, "overflow", this.parentOriginalOverflow);
        }
        if (this.parentOriginalPosition !== getStyle(this.parent, "position")) {
          setStyle(this.parent, "position", this.parentOriginalPosition);
        }

        this.parent.removeChild(this.$el);
      },
      transitionTime
    );
  }
};

const destroy = function () {

  removeResizeEvents.call(this);

  this.$destroy();
};

const bindCallBack = function (options) {

  this.open = () => {
    open.call(this, options);
  };
  this.close = close.bind(this);
  this.destroy = destroy.bind(this);
};

export default function (options) {

  let instance = initInstance(options);

  bindCallBack.call(instance, options);

  return instance;
}



