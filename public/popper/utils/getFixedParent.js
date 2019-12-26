import css from './css.js';

let isRoot = function (ele) {
  return !ele || ['#document', 'html', 'body'].includes(ele.nodeName.toLowerCase());
};

// 获得父级定位元素
export default function (dom) {

  if (isRoot(dom)) {
    return document.documentElement;
  }

  let parent = dom.parentNode;

  while (parent) {

    if (isRoot(dom)) {
      return document.documentElement;
    } else if (css(dom, 'transform') !== 'none') {
      return dom;
    }
    parent = parent.parentNode;
  }

  return document.documentElement;
}
