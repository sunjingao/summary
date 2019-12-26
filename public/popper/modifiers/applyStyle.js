import css from '../utils/css.js';
import attr from '../utils/attr.js';

export default function (instance) {

  let popper = instance.elements.popper;

  requestAnimationFrame(
    _ => {
      attr(popper, instance.changes.attributes);
      css(popper, instance.changes.styles);
    }
  );
}