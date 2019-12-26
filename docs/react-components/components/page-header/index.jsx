import Markdown from '../../markdown';
import component from './pageHeader.md';
import './style.scss';

export default class Button extends Markdown {

  document(locale) {
    return component;
  }
}
