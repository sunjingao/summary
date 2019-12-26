import {utilityReg} from './regexp.js';

export default function (_) {

  // 缓存独一无二的 ID
  let uniqueId = 1;

  let utility = {

    noop: _ => {
    },

    identity: value => value,

    constant(val) {

      return function () {
        return val;
      }
    },

    times(n, iteratee, context) {

      let retArr = [], index = 0;

      while (++index <= n) {
        retArr.push(iteratee.call(context, index));
      }
      return retArr;
    },

    random(min, max) {

      if (arguments.length === 1) {
        max = min;
        min = 0;
      }

      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },

    mixin(object) {

      for (let [key, value] of _.entries(object)) {
        _[key] = value;
      }
      _._mixinPrototype(_);
    },

    iteratee(value, context) {

      if (_.isValueType(value, 'undefined')) {
        return _.identity;
      }
      if (_.isValueType(value, 'function')) {
        return value.bind(context);
      }
      if (_.isValueType(value, 'object')) {
        return _.matcher(value);
      }
      if (_.isValueType(value, 'string')) {
        return _.property(value);
      }
    },

    uniqueId(prefix) {

      return `${(prefix || '') + uniqueId++}`;
    },

    escape(val) {

      let regMap = utilityReg.escapeMap,
        regExp = new RegExp(_.keys(regMap).join('|'), 'g');

      return val.replace(
        regExp,
        val => regMap[val]
      );
    },

    unescape(val) {

      let regMap = _.invert(utilityReg.escapeMap),
        regExp = new RegExp(_.keys(regMap).join('|'), 'g');

      return val.replace(
        regExp,
        val => regMap[val]
      );
    },

    result(object, property, defaultValue) {

      let val = object[property];

      if (_.isValueType(val, 'function')) {
        return val.call(object);
      } else if (_.has(object, property)) {
        return val;
      } else if (_.isValueType(defaultValue, 'function')) {
        return defaultValue.call(object);
      } else {
        return defaultValue;
      }
    },

    now() {

      return (new Date()).getTime();
    },
  };

  Object.assign(_, utility);
};
