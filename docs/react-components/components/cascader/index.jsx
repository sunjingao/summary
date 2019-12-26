import Markdown from '../../markdown';
import component from './cascader.md';
import './style.scss';

export default class Cascader extends Markdown {

  document(locale) {
    return component;
  }
}
