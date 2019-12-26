import css from './css.js'
// 当前元素是否是定位元素
export default function (dom) {
  
  if (!dom || dom.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }

  return css(dom, 'position') !== 'static';
}