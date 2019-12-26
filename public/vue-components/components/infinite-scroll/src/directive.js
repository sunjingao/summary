import {throttle} from "../../../src/utils/throttleAndDebounce";

const defaultSettings = {
  defaultDelay: 500, // 默认延时
  defaultDisabled: false, // 默认是否禁止选中
  defaultDistance: 100, // 默认触发回调的距离
  defaultCallBack: function () {
  }, // 默认回调函数
};


let addEvents = function () {

  this.addEventListener(
    'scroll',
    this.throttleVInfinite
  )
};

let removeEvents = function () {

  this.removeEventListener(
    'scroll',
    this.throttleVInfinite
  )
};

function scroll() {

  if (!this.maxHeightVInfinite) {
    // 首次滚动，添加 maxHeight。加在这里是因为在这里dom已经渲染完毕
    this.maxHeightVInfinite = this.scrollHeight;
  }

  let height = this.scrollHeight + this.distanceVInfinite;

  if (
    height > this.maxHeightVInfinite
  ) {

    this.maxHeightVInfinite = height;
    // 当调用回调函数时，说明没有额外的内容了，滚动结束。
    this.callbackVInfinite(removeEvents.bind(this));
  }
}

export default {

  bind: function (el, binding, vnode) {

    let disabled = el.getAttribute("infinite-scroll-disabled") || defaultSettings.defaultDisabled,
      delay = el.getAttribute("infinite-scroll-delay") || defaultSettings.defaultDelay,
      distance = el.getAttribute("infinite-scroll-distance") || defaultSettings.defaultDistance;

    if (disabled) {
      return;
    }

    el.disabledVInfinit = disabled;
    el.distanceVInfinite = distance;
    el.callbackVInfinite = binding.value || defaultSettings.defaultCallBack;
    el.throttleVInfinite = throttle(scroll.bind(el), delay);

    addEvents.call(el);
  },

  unbind: function (el, binding) {
    removeEvents.call(el);
  }
}




