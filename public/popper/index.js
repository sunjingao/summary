import zIndexObj from './utils/zIndex.js';
import update from './methods/update.js';
import destroy from './methods/destroy.js';
import show from './methods/show.js';
import hide from './methods/hide.js';
import enableEventListeners from './methods/enableEventListeners.js';
import removeEventListeners from './methods/removeEventListeners.js';
import getScrollParents from './utils/getScrollParents.js';
import getCommonNode from "./utils/getCommonNode.js";
import initOptions from './utils/initOptions.js';
import getBoundariesElement from "./utils/getBoundariesElement";
import initPopperCss from "./utils/initPopperCss";
import calcOriginalPopper from "./utils/calcOriginalPopper";
import getDom from "./utils/getDom";
import getCss from "./utils/css";

class Popper {

  constructor(reference, popper, options) {

    this.options = initOptions(options);

    this.elements = {
      reference: getDom(reference),
      popper: getDom(popper),
      commonElement: getCommonNode(reference, popper, this.options.positionFixed),
      refScrollParents: getScrollParents(reference),
      popperScrollParents: getScrollParents(popper),
      boundariesElement: null
    };
    this.elements.boundariesElement = getBoundariesElement.call(this);

    this.offsets = {
      reference: null,
      popper: null,
      // 记录popper最初始的位置，为了最后正确使用 transform: translate()。
      originalPopper: null,
    };

    this.state = {
      // 是否开启了监听事件
      isListening: false,
      // 监听事件回调钩子，用于 addEventListener 和 removeEventListener
      updateListener: () => {
        this.update();
        // 阻止冒泡，防止refScrollParents有多个值时触发update多次执行
        return false;
      }
    };

    // 最终改变的样式
    this.changes = {
      attributes: {},
      styles: {}
    };

    // zIndex + 1
    zIndexObj.addZIndex();

    // 初始化popper的相关属性。
    initPopperCss.call(this);

    this.offsets.originalPopper = calcOriginalPopper.call(this);

    this.options.onCreate();

    if (this.options.updateImmediately) {
      this.enableEventListeners();
    }
  }

  // 由 位置 改变引起的更新 这个更新要注意
  update() {

    this.options.onUpdate();

    update.call(this, this);

    // 阻止冒泡，防止refScrollParents有多个值时触发update多次执行
    return false;
  }

  // 清除事件和引用
  destroy() {
    destroy.call(this);
  }

  // 开启事件监听
  enableEventListeners() {
    enableEventListeners.call(this);
  }

  // 关闭事件监听
  removeEventListeners() {
    removeEventListeners.call(this);
  }

  toggle() {
    if (getCss(this.elements.popper, 'display') === 'none') {
      this.show();
    }
    else {
      this.hide();
    }
  }

  // 显示，主要用于toolTip
  show() {
    zIndexObj.addZIndex(); // 每次显示z-index都要加1
    show.call(this);
  }

  // 隐藏，主要用于toolTip
  hide() {
    hide.call(this);
  }

  // 获取当前的zIndex
  static getZIndex() {
    return zIndexObj.getZIndex();
  }

  // 当前的zIndex+1
  static addZIndex() {
    return zIndexObj.addZIndex();
  }
}

export default Popper;
