import Markdown from '../../markdown';
import component from './badge.md';
import './style.scss';

export default class Button extends Markdown {

  document(locale) {
    return component;
  }
}

