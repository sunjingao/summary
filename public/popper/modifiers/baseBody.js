
// 一些特殊情况的处理
export default function (instance) {

  let popperScrollParents = instance.elements.popperScrollParents,
    commonEle = instance.elements.commonElement;

  if (!instance.options.positionFixed) {
    for (let element of Object.values(popperScrollParents)) {
      if (element === commonEle) {
        instance.offsets.popper.top += element.scrollTop;
        instance.offsets.popper.left += element.scrollLeft;
      }
    }
  }
}
