import css from "./css";

export default function () {

  // 初始化的时候设置popper的定位，否则可能会导致 offsets.originalPopper 的数据有问题
  css(this.elements.popper, 'position', this.options.positionFixed ? 'fixed' : 'absolute');
}
