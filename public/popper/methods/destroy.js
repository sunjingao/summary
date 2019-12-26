import removeEventListeners from './removeEventListeners.js';
import css from '../utils/css.js';

export default function () {

  removeEventListeners.call(this);

  this.elements && this.elements.popper && css(this.elements.popper, 'placement', null);

  this.options = null;
  this.elements = null;
  this.offsets = null;
  this.state = null;
  this.changes = null;
}
