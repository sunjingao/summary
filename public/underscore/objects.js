/**
 * 对象处理
 */

import {objectReg} from './regexp.js';

export default function (_) {

  let object = {

    // 获得精确类型
    getPreciseType(value) {
      return toString.call(value).match(objectReg.getType)[1].toLowerCase();
    },

    // 获得null,undefined,number,string,boolean,function,object,array,collection(数组及伪数组)等几种类型
    isValueType(value, types = []) {

      let valueType;

      types = _.getPreciseType(types) !== 'array' ? [types] : types;

      switch (typeof value) {
        case 'undefined':
          valueType = 'undefined';
          break;
        case 'number':
          valueType = 'number';
          break;
        case 'boolean':
          valueType = 'boolean';
          break;
        case 'string':
          valueType = 'string';
          break;
        case 'function':
          valueType = 'function';
          break;
        case 'symbol':
          valueType = 'symbol';
          break;
        default:
          valueType = value === null ? 'null' : Array.isArray(value) ? 'array' : 'object'
      }

      return types.some(item => item.toLowerCase() === valueType) ||
        types.includes('collection') && (valueType === 'array' || valueType === 'object' && _.has(value, 'length'));
    },

    keys(value) {

      if (!_.isValueType(value, ['object', 'array'])) {
        return [];
      }

      return Object.keys(value);
    },

    allKeys(value) {

      let retArr = [];

      if (!_.isValueType(value, ['object', 'array'])) {
        return retArr;
      }

      for (let key in value) {
        retArr.push(key);
      }

      return retArr;
    },

    values(value) {

      if (!_.isValueType(value, ['object', 'array'])) {
        return [];
      }

      return Object.values(value);
    },

    entries(value) {

      if (!_.isValueType(value, ['object', 'array'])) {
        return [];
      }

      return Object.entries(value);
    },

    mapObject(object, iteratee, context) {

      let resObj = {};

      for (let [key, value] of _.entries(object)) {
        resObj[key] = iteratee.call(context, value, key, object);
      }
      return resObj;
    },

    pairs(object) {

      let resObj = [];

      for (let [key, value] of _.entries(object)) {
        let newIndex = resObj.length;
        resObj[newIndex] = [];
        resObj[newIndex].push(key, value);
      }
      return resObj;
    },

    invert(object) {

      let resObj = {};

      for (let [key, value] of _.entries(object)) {
        resObj[value] = key;
      }
      return resObj;
    },

    create(prototype, props) {

      let resObj = Object.create(prototype);

      for (let [key, value] of _.entries(props)) {
        resObj[key] = value;
      }
      return resObj;
    },

    functions(object) {

      let resArr = [];

      for (let [key, value] of _.entries(object)) {
        _.isValueType(value, 'function') ? resArr.push(key) : '';
      }

      return _.sortBy(resArr, _.identity);
    },

    findKey(object, iteratee, context) {

      for (let [key, value] of _.entries(object)) {
        if (
          iteratee.call(context, value, key, object)
        ) {
          return key;
        }
      }
    },

    extend(destination, ...source) {

      let proto = destination.__proto__;

      destination.__proto__ = {};

      for (let index = 0; index < source.length; index++) {
        let item = source[index];
        for (let key in item) {
          destination[key] = item[key];
        }
      }

      destination.__proto__ = proto;
      return destination;
    },

    extendOwn(destination, ...source) {

      return Object.assign(destination, ...source);
    },

    pick(object, ...keys) {

      let resObj = {},
        callback = function (value, key) {
          return _.filter(keys,
            (findValue) => {
              return _.isValueType(findValue, 'function') ? findValue.call(object, value, key, object) : findValue === key;
            }).length > 0;
        };

      for (let [key, value] of _.entries(object)) {
        if (callback(value, key, object)) {
          resObj[key] = value;
        }
      }
      return resObj;
    },

    omit(object, ...keys) {

      let resObj = {},
        callback = function (value, key) {
          return _.filter(keys,
            (findValue) => {
              return _.isValueType(findValue, 'function') ? findValue.call(object, value, key, object) : findValue === key;
            }).length > 0;
        };

      for (let [key, value] of _.entries(object)) {
        if (!callback(value, key, object)) {
          resObj[key] = value;
        }
      }
      return resObj;
    },

    defaults(object, ...defaults) {

      for (let item of _.values(defaults)) {
        for (let [key, value] of _.entries(item)) {
          if (!object.hasOwnProperty(key)) {
            object[key] = value;
          }
        }
      }
      return object;
    },

    clone(object) {

      if (!_.isValueType(object, ['object', 'array'])) {
        return object;
      }

      return _.isValueType(object, 'object') ? {...object} : [...object];
    },

    tap(obj, cb) {

      cb(obj);
      return obj;
    },

    has(object, key) {

      if (!_.isValueType(object, ['array', 'object'])) {
        return false;
      }
      else {
        return object.hasOwnProperty(key);
      }
    },

    property(attr) {

      return function (obj) {

        if (_.isValueType(attr, 'array')) {
          let res = obj;
          for (let value of Object.values(attr)) {
            res = res[value];
          }
          return res;
        }
        else {
          return obj[attr];
        }
      }
    },

    propertyOf(obj) {

      return function (attr) {
        return obj[attr];
      }
    },

    matcher(attrs) {

      return function (obj) {
        return _.isMatch(obj, attrs);
      }
    },

    isEqual(obj1, obj2) {

      function isBasicType(value) {
        return typeof value !== 'object' || value === null;
      }

      if (obj1 === obj2 || Number.isNaN(obj1) && Number.isNaN(obj2)) {
        return true;
      }
      else if ((isBasicType(obj1) || isBasicType(obj2)) && obj1 !== obj2) {
        return false;
      }

      for (let [index, value] of Object.entries(obj1)) {
        if (!_.isEqual(value, obj2[index])) {
          return false;
        }
      }
      return true;
    },

    isMatch(object, attrs) {

      for (let [key, value] of _.entries(attrs)) {
        if (!object.hasOwnProperty(key) || object[key] !== value) {
          return false;
        }
      }
      return true;
    },

  };

  Object.assign(_, object);
};
