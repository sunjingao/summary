import enableEventListeners from './enableEventListeners.js';
import calcOriginalPopper from "../utils/calcOriginalPopper";
import css from "../utils/css";

export default function () {

  if(!this.elements.popper){
    return;
  }

  const popperDisplay = css(this.elements.popper, 'display');

  // 这里考虑到 作为popper首次执行，使用show改变状态等几种情况
  if (popperDisplay === 'none') {

    css(this.elements.popper, 'display', 'block');

    // 由于display：none对位置有影响，所以在这需要重新赋值。
    this.offsets.originalPopper = calcOriginalPopper.call(this);
  }

  enableEventListeners.call(this);

  this.state.updateListener();
}
