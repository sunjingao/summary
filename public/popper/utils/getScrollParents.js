import css from './css.js';

export default function (reference) {

  let scrollParents = [],
    parent = reference && reference.parentNode,
    overflowArr = ['auto', 'scroll'];

  while (parent) {

    if (['#document', 'html', 'body'].indexOf(parent.nodeName.toLowerCase()) !== -1) {
      scrollParents.push(document.documentElement);
      break;
    }

    if (
      overflowArr.includes(css(parent, 'overflow')) ||
      overflowArr.includes(css(parent,'overflowX')) ||
      overflowArr.includes(css(parent,'overflowY'))
    ) {
      scrollParents.push(parent);
    }
    parent = parent.parentNode;
  }

  return scrollParents;
}
