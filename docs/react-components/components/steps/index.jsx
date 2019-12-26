import Markdown from '../../markdown';
import component from './steps.md';
import './style.scss';

export default class Slider extends Markdown {

  document(locale) {
    return component;
  }
}
