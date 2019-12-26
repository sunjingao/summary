import Vue from 'vue';
import Loading from './loading.vue';
import {getStyle, setStyle} from "../../../src/utils/dom"

const Mask = Vue.extend(Loading);

const setZIndex = function (el) {

  el["v-loading-temporary-instance"].zIndex = Popper.addZIndex();
};

const setParent = function (el, binding) {

  let target = el.getAttribute("loading-target");

  if (target) {
    el.parent = document.querySelector(target);
  } else if (binding.modifiers && binding.modifiers.body) {
    el.parent = document.querySelector("body");
  } else {
    el.parent = el;
  }
};

const setParentAttr = (el) => {

  el.parentOriginalOverflow = getStyle(el.parent, "overflow");
  el.parentOriginalPosition = getStyle(el.parent, "position");
  if (el.parentOriginalOverflow !== "hidden") {
    setStyle(el.parent, 'overflow', 'hidden');
  }
  if (el.parent.parentOriginalPosition === "static" || el.parent.parentOriginalPosition === "") {
    setStyle(el.parent, "position", "relative");
  }
};

const removeParentAttr = (el) => {

  if (!el.parent.contains(el["v-loading-temporary-instance"].$el)) {
    return;
  }

  if (el.parentOriginalOverflow !== getStyle(el.parent, "overflow")) {
    setStyle(el.parent, "overflow", el.parentOriginalOverflow);
  }
  if (el.parentOriginalPosition !== getStyle(el.parent, "position")) {
    setStyle(el.parent, "position", el.parentOriginalPosition);
  }

  el.parent.removeChild(el["v-loading-temporary-instance"].$el);
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

const initPosition = function (el) {

  let borderLeft = parseFloat(getStyle(el.parent, 'border-left-width')) || 0,
    borderTop = parseFloat(getStyle(el.parent, 'border-top-width')) || 0,
    instance = el["v-loading-temporary-instance"];

  if ([document.documentElement, document.body].includes(el.parent)) {

    instance.top = `${document.documentElement.scrollTop - borderTop}px`;
    instance.left = `${document.documentElement.scrollLeft - borderLeft}px`;

    instance.width = `${getBodyWidthOrHeight('width')}px`;
    instance.height = `${getBodyWidthOrHeight('height')}px`;
  } else {

    let width = el.parent.offsetWidth,
      height = el.parent.offsetHeight;

    instance.top = `${el.parent.scrollTop - borderTop}px`;
    instance.left = `${el.parent.scrollLeft - borderLeft}px`;

    instance.width = `${width}px`;
    instance.height = `${height}px`;
  }
};

// 延时设置opacity属性，展示动画效果
const addAnimation = function (el) {
  el["v-loading-temporary-instance"].opacity = 1;
};

// 延时设置opacity属性，展示动画效果
const removeAnimation = function (el) {
  el["v-loading-temporary-instance"].opacity = 0;
};

const toggleLoading = (el, binding) => {

  let instance = el["v-loading-temporary-instance"];

  if (binding && binding.value) {

    setParent(el, binding);

    setZIndex(el);

    setParentAttr(el);

    initPosition(el);

    bindResizeEvents(el);

    el.addLoading = true;

    requestAnimationFrame(
      _ => {

        // 避免大小和位置的因素造成动画改变
        el.parent.appendChild(instance.$el);

        requestAnimationFrame(
          _ => {
            // 增加opacity动画
            addAnimation(el);
          }
        )
      }
    )
  } else {

    let transitionTime = getStyle(instance.$el, 'transition-duration');
    transitionTime = transitionTime && parseFloat(transitionTime) * 1000 || 0;

    removeAnimation(el);

    // 动画消失清除dom
    setTimeout(
      _ => {

        el.addLoading = false;

        removeResizeEvents(el);

        // 如果没有 el.parent，说明是首次执行，el.parent为空，此时不执行
        el.parent && removeParentAttr(el);
      },
      transitionTime
    );
  }
};

const bindResizeEvents = function (el) {

  el.resize = () => {
    requestAnimationFrame(
      _ => initPosition(el)
    );
  };

  window.addEventListener('resize', el.resize);
};

const removeResizeEvents = function (el) {

  window.removeEventListener('resize', el.resize);
};

export default {

  bind: function (el, binding, vnode) {

    let showLoadingIcon = el.getAttribute("loading-showLoadingIcon"),
      text = el.getAttribute("loading-text"),
      loadingClass = el.getAttribute("loading-loadingClass"),
      contentClass = el.getAttribute("loading-contentClass"),
      componentName = el.getAttribute("loading-componentName");

    showLoadingIcon = showLoadingIcon === null ? true : showLoadingIcon;

    el["v-loading-temporary-instance"] = new Mask({
      el: document.createElement('div'),
      data: {
        showLoadingIcon: showLoadingIcon,
        text: text,
        loadingClass: loadingClass,
        contentClass: contentClass,
        componentName: componentName
      }
    });

    toggleLoading(el, binding);
  },

  update: function (el, binding) {
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding);
    }
  },

  // 需要清除增加的dom
  unbind: function (el, binding) {

    if (el.addLoading && el.mask && el.mask.parentNode.contains(el.mask)) {
      removeResizeEvents(el);
      el.mask.parentNode.removeChild(el.mask);
      removeParentAttr();
    }
  }
}




