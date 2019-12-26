import Markdown from '../../markdown';
import component from './message.md';
import './style.scss';

export default class Message extends Markdown {

  document(locale) {
    return component;
  }
}
