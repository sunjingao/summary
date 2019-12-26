import getDom from './getDom.js';

export default function () {

  let boundariesElement = this.options.boundariesElement;

  if (['viewport', document].includes(boundariesElement)) {
    return document.documentElement;
  } else if (boundariesElement === 'scrollParent') {
    return this.elements.refScrollParents[0];
  } else {
    return getDom(boundariesElement);
  }
}
