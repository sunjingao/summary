/**
 * 静态函数处理
 */

import {indexReg, utilReg} from './regExp.js';
import {utilConst} from './const.js';

export default function ($) {

  let deepClone = function (target, source) {

    if (!$.isQuote(source)) {
      return source;
    }

    for (let [key, value] of Object.entries(source)) {
      if ($.isQuote(value)) {
        target[key] = $.type(value) === 'array' ? [] : {};
        deepClone(target[key], value);
      }
      else {
        target[key] = source[key];
      }
    }
    return target;
  };

  let util = {

    camelCase(str) {

      return $.type(str) === 'string' ? str.replace(utilReg.camelCase, (a, b) => b.toUpperCase()) : str;
    },

    camelToLine(str) {

      return $.type(str) === 'string' ? str.replace(utilReg.camelToLine, a => `${a[0]}-${a[1].toLowerCase()}`) : str;
    },

    contains(parent, node) {

      return parent && node && parent.nodeType === 1 && node.nodeType === 1 && parent !== node && parent.contains(node);
    },

    each(collection, cb) {

      if ($.isCollection(collection)) {
        $.toArray(collection).some((item, index) => cb.call(item, index, item) === false);
      }
      else if ($.type(collection) === 'object') {
        for (let [index, item] of Object.entries(collection)) {
          if (cb.call(item, index, item) === false) {
            break;
          }
        }
      }
      return collection;
    },

    flatten(array, shallow = Infinity) {

      if (
        $.type(array) !== 'array' ||
        $.type(shallow) !== 'undefined' && (isNaN(Number(shallow)) || !isFinite(Number(shallow)))
      ) {
        return array;
      }

      let retArr = [];

      if (shallow >= 0) {
        for (let value of Object.values(array)) {
          $.type(value) === 'array' && shallow > 0 ?
            retArr.push(...$.flatten(value, shallow - 1)) : retArr.push(value)
        }
        return retArr;
      }
      else if (shallow === undefined) {
        for (let value of Object.values(array)) {
          $.type(value) === 'array' ? retArr.push(...$.flatten(value, shallow)) : retArr.push(value);
        }
        return retArr;
      }
      else {
        return array;
      }
    },

    extend(deepSign, target, ...args) {

      if ($.type(deepSign) !== 'boolean') {
        args = [target, ...args];
        target = deepSign;
        deepSign = false;
      }

      deepSign ? $.each(args, item => deepClone(target, item)) : Object.assign(target, ...args);

      return target;
    },

    fn(name, cb) {

      if ($.type(name) === 'string') {
        $.prototype[name] = cb;
      }
      else if ($.type(name) === 'object') {
        for (let [key, value] of Object.entries(name)) {
          $.prototype[key] = value;
        }
      }
    },

    grep(obj, cb) {

      return $.toArray(obj).filter((item, index) => cb.call(item, item, index));
    },

    uniq(val) {

      return [...new Set($.toArray(val))];
    },

    inArray(element, array, fromIndex = 0) {

      return $.toArray(array).indexOf(element, fromIndex);
    },

    map(collection, cb) {

      let retArr = [], notReturnArray = [null, undefined];

      if ($.isCollection(collection)) {
        retArr = $.toArray(collection).map(
          (item, index) => cb.call(item, item, index)
        ).filter(x => !notReturnArray.includes(x));
      }
      else if ($.type(collection) === 'object') {
        for (let [index, item] of Object.entries(collection)) {
          let res = cb.call(item, item, index);
          if (!notReturnArray.includes(res)) {
            retArr.push(res);
          }
        }
      }
      return retArr;
    },

    maybeAddPx(name, value) {

      return ($.isNumeric(value) && !utilConst.cssNumber[name]) ? value + "px" : value
    },

    noop() {
    },

    parseJSON(objectStr) {

      return JSON.parse(objectStr);
    },

    trim(str) {

      return typeof str === 'string' ? str.trim() : str;
    },

    toArray(val) {

      return $.isCollection(val) ? [].slice.call(val) :
        val ? [val] : [];
    },

    includes(array, val) {

      return $.toArray(array).includes(val)
    },

    hasProperty(obj, property) {

      return obj && $.isFunction(obj.hasOwnProperty) && obj.hasOwnProperty(property)
    },

    getNodeByStringOrNode(val) {

      if ($.type(val) !== 'object' && $.type(val) !== 'string') {
        return [];
      }

      if ($.type(val) === 'object') {
        return [val];
      }

      if (utilReg.onlyInSpecialTag.test(val)) {
        let div = document.createElement('table');
        div.innerHTML = val;
        return $.toArray(div.querySelectorAll(RegExp.$1));
      }
      else if (indexReg.htmlTag.test(val)) {

        let div = document.createElement('div');
        div.innerHTML = val;

        let childNodes = div.childNodes;

        return $.map(
          childNodes, item => {
            if ($.isNullTextNode(item)) {
              return null;
            }
            return item;
          }
        );
      }
      else {
        return $.toArray(document.querySelectorAll(val));
      }
    },

    toNodes(val) {

      let retVal = [];

      val = $.toArray(val);

      for (let index = 0; index < val.length; index++) {
        let node = $.getNodeByStringOrNode(val[index]);
        retVal = retVal.concat(node);
      }
      return retVal;
    },

    // 主要用于排除空文本节点
    isNullTextNode(item) {
      return item && item.nodeType && item.nodeType === 3 && (item.nodeValue === null || item.nodeValue.trim() === '');
    },

    // 是否维数组或伪数组
    isCollection(val) {

      // dom.children 是 HTMLCollection类型，此时使用 val.hasOwnProperty('length') 为false
      return $.type(val) === 'object' && val.hasOwnProperty('length') ||
        $.type(val) === 'array' ||
        ['[object HTMLCollection]', '[object NodeList]'].includes(toString.call(val));
    },

    // 是否为引用类型
    isQuote(val) {

      return $.type(val) === 'object' || $.type(val) === 'array';
    },

    isArray(val) {

      return $.type(val) === 'array';
    },

    isFunction(val) {

      return $.type(val) === 'function';
    },

    isNumeric(val) {

      return Number.isFinite(Number(val));
    },

    isPlainObject(val) {

      return $.type(val) === 'object';
    },

    isWindow(val) {

      return val && val === val.window;
    },

    // 返回的类型有 null undefined boolean number string function array date regexp object error。
    type(value) {

      switch (typeof value) {
        case 'undefined':
          return 'undefined';
        case 'number':
          return 'number';
        case 'boolean':
          return 'boolean';
        case 'string':
          return 'string';
        case 'function':
          return 'function';
        case 'symbol':
          return 'symbol';
        default:
          if (value === null) {
            return 'null';
          }
          else if (Array.isArray(value)) {
            return 'array';
          }
          else if (toString.call(value) === '[object Date]') {
            return 'date';
          }
          else if (toString.call(value) === '[object RegExp]') {
            return 'regexp';
          }
          else if (toString.call(value) === '[object Error]') {
            return 'error';
          }
          else {
            return 'object';
          }
      }
    },

  };

  Object.assign($, util);
};