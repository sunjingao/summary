import getBoundingClient from './getBoundingClient.js';

// 获得第一个元素相对于第二个元素的距离
export default function (dom1, dom2) {

  let dom1Rect = getBoundingClient(dom1),
    dom2Rect = getBoundingClient(dom2),
    dom2Styles = getComputedStyle(dom2);

  return {
    top: dom1Rect.top - dom2Rect.top - parseFloat(dom2Styles.borderTopWidth),
    left: dom1Rect.left - dom2Rect.left - parseFloat(dom2Styles.borderLeftWidth),
    bottom: dom1Rect.top - dom2Rect.top - parseFloat(dom2Styles.borderTopWidth) + dom1Rect.height,
    right: dom1Rect.left - dom2Rect.left - parseFloat(dom2Styles.borderLeftWidth) + dom1Rect.width,
    width: dom1Rect.width,
    height: dom1Rect.height
  }
}
