import Markdown from '../../markdown';
import component from './dialog.md';
import './style.scss';

export default class QuickStart extends Markdown {

  document(locale) {
    return component;
  }
}
