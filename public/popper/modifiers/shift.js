export default function (instance) {

  let refRect = instance.offsets.reference,
    popperEle = instance.elements.popper,
    placementFirst = instance.changes.attributes.placement.split('-')[0],
    placementSecond = instance.changes.attributes.placement.split('-')[1];

  instance.offsets.popper = {
    top: {
      top: refRect.top - popperEle.offsetHeight,
      left: placementSecond === 'start' ? refRect.left :
        placementSecond === 'end' ? refRect.right - popperEle.offsetWidth :
          refRect.left + refRect.width / 2 - popperEle.offsetWidth / 2,
      width: popperEle.offsetWidth,
      height: popperEle.offsetHeight
    },
    right: {
      top: placementSecond === 'start' ? refRect.top :
        placementSecond === 'end' ? refRect.bottom - popperEle.offsetHeight :
          refRect.top + refRect.height / 2 - popperEle.offsetHeight / 2,
      left: refRect.right,
      width: popperEle.offsetWidth,
      height: popperEle.offsetHeight
    },
    bottom: {
      top: refRect.bottom,
      left: placementSecond === 'start' ? refRect.left :
        placementSecond === 'end' ? refRect.right - popperEle.offsetWidth :
          refRect.left + refRect.width / 2 - popperEle.offsetWidth / 2,
      width: popperEle.offsetWidth,
      height: popperEle.offsetHeight
    },
    left: {
      top: placementSecond === 'start' ? refRect.top :
        placementSecond === 'end' ? refRect.bottom - popperEle.offsetHeight :
          refRect.top + refRect.height / 2 - popperEle.offsetHeight / 2,
      left: refRect.left - popperEle.offsetWidth,
      width: popperEle.offsetWidth,
      height: popperEle.offsetHeight
    }
  }[placementFirst];
}
