import Markdown from '../../markdown';
import component from './notification.md';
import './style.scss';

export default class Message extends Markdown {

  document(locale) {
    return component;
  }
}
