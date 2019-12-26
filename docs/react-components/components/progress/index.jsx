import Markdown from '../../markdown';
import component from './progress.md';
import './style.scss';

export default class Button extends Markdown {

  document(locale) {
    return component;
  }
}
