import isLocated from './isLocated.js';
import getOffsetParent from './getOffsetParent.js';
import getFixedParent from './getFixedParent.js';

export default function (dom1, dom2, isFixed) {

  if (!dom1 || !dom2) {
    return document.documentElement;
  }

  if (isFixed) {
    return getFixedParent(dom2);
  }

  let isPrevious = dom1.compareDocumentPosition(dom2) & Node.DOCUMENT_POSITION_FOLLOWING,
    range = document.createRange();

  range.setStart(isPrevious ? dom1 : dom2, 0);
  range.setEnd(isPrevious ? dom2 : dom1, 0);

  let {commonAncestorContainer} = range;

  if (isLocated(commonAncestorContainer)) {
    return commonAncestorContainer;
  }
  else {
    return getOffsetParent(commonAncestorContainer);
  }
}
