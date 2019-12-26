import isLocated from './isLocated.js';

// 获得父级定位元素
export default function (dom) {
  
  let parent = dom && dom.offsetParent;
  
  while (parent) {
    if (isLocated(parent)) {
      return parent;
    }
    parent = parent.offsetParent;
  }
  
  return document.documentElement;
}