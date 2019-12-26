import util from "./util.js";
import core from "./core.js";

import {indexReg} from './regExp.js';

let $ = function (selector, context) {

  let domArr = [];

  if (selector instanceof $) {
    return selector;
  } else if ($.type(selector) === 'function') {
    return $(document).ready(selector);
  } else if (!(this instanceof $)) {
    return new $(selector, context);
  }

  if ($.type(selector) === 'string') {

    if (indexReg.htmlTag.test(selector)) {
      domArr = $.toNodes(selector);
      if ($.type(context) === 'object') {
        for (let [key, value] of Object.entries(context)) {
          if (indexReg.selfAttribute.test(key)) {
            $(domArr)[key](value);
          } else {
            $(domArr).attr(key, value)
          }
        }
      }
    } else {
      domArr = (context && context.nodeType ? context : document).querySelectorAll(selector);
    }
  } else if ($.isCollection(selector)) {

    domArr = $.flatten(
      $.toArray(selector).map(
        item => {
          let node = $.toNodes(item)[0];
          return context ? $.contains(context, node) ? node : null : node;
        }
      )
    );
  } else if ($.type(selector) === 'object') {
    domArr = context ? context.contains(selector) ? [selector] : [] : [selector];
  }

  // 筛选出来的dom进行赋值
  $.extend(this, domArr);

  this.length = domArr.length;
  this.selector = selector;
};

util($);
core($);

export default $;


