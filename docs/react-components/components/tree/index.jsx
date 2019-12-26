import Markdown from '../../markdown';
import component from './tree.md';
import './style.scss';

export default class Button extends Markdown {

  document(locale) {
    return component;
  }
}
