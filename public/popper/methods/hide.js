import css from '../utils/css.js';
import removeEventListeners from './removeEventListeners.js';

export default function () {

  removeEventListeners.call(this);

  if (css(this.elements.popper, 'display') !== 'none') {
    css(this.elements.popper, 'display', 'none');
  }
}
