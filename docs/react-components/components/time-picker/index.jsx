import Markdown from '../../markdown';
import component from './timePicker.md';
import './style.scss';

export default class Button extends Markdown {

  document(locale) {
    return component;
  }
}
