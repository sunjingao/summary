/**
 * 数组处理
 */


export default function (_) {

  let array = {

    first(array, n = 1) {

      let sliceArray = [].slice.call(array, 0, n);

      return n === 1 ? sliceArray[0] : sliceArray;
    },

    initial(array, n = 1) {

      return [].slice.call(array, 0, array.length - n);
    },

    last(array, n = 1) {

      let res = [].slice.call(array, array.length - n);

      return n === 1 ? res[0] : res;
    },

    rest(array, n = 1) {

      return [].slice.call(array, n);
    },

    flatten(array, shallow = Infinity) {

      let cantFlat = true;

      while (shallow--) {

        let tempArray = [];

        for (let value of Object.values(array)) {
          if (_.isValueType(value, 'array')) {
            cantFlat = false;
            tempArray.push(...value);
          }
          else {
            tempArray.push(value);
          }
        }

        array = tempArray;

        if (cantFlat) {
          break;
        }
        else {
          cantFlat = true;
        }
      }

      return array;
    },

    without(array, ...args) {

      return _.filter(
        array,
        function (item) {
          return !args.includes(item);
        }
      );
    },

    union(...args) {

      let retArr = [];

      for (let value of _.values(args)) {
        retArr.push(...value);
      }

      return [...new Set(retArr)];
    },

    intersection(...args) {

      let retArr = [];

      for (let value of _.values(args[0])) {
        _.every(args, item => item.includes && item.includes(value)) && retArr.push(value);
      }

      return [...new Set(retArr)];
    },

    difference(array, ...others) {

      let retArr = [];

      for (let value of _.values(array)) {
        _.every(others, item => item.includes && !item.includes(value)) && retArr.push(value);
      }

      return [...new Set(retArr)];
    },

    uniq(array, iteratee = _.identity) {

      if (!_.isValueType(array, 'array')) {
        return [];
      }

      return _.sortBy([...new Set(array)], iteratee);
    },

    zip(...args) {

      let maxLen = _.max(_.map(args, item => item.length)) || 0, retArr = [];

      for (let index = 0; index < maxLen; index++) {
        retArr.push(_.map(args, item => item[index]))
      }

      return retArr;
    },

    unzip(array) {

      return _.zip(...array);
    },

    object() {

      let retObj = {}, isKeyValue = arguments.length === 1;

      if (isKeyValue) {
        let data = arguments[0];
        for (let item of Object.values(data)) {
          retObj[item[0]] = item[1];
        }
      }
      else {
        let keyArray = arguments[0], valueArray = arguments[1];
        for (let index = 0; index < keyArray.length; index++) {
          retObj[keyArray[index]] = valueArray[index];
        }
      }

      return retObj;
    },

    chunk(array, length) {

      let retArr = [];

      for (let index = 0; index < array.length; index += length) {
        retArr.push(array.slice(index, index + length));
      }

      return retArr;
    },

    indexOf(array, value) {

      return _.isValueType(array, 'array') ? array.indexOf(value) : -1;
    },

    lastIndexOf(array, value) {

      return _.isValueType(array, 'array') ? array.lastIndexOf(value) : -1;
    },

    sortedIndex(array, value, iteratee = _.identity, context = array) {

      if (!_.isValueType(array, 'array')) {
        return -1;
      }

      let iter = _.isValueType(iteratee, 'function') ? iteratee : item => item[iteratee],
        order = iter(array[0]) < iter(array[1]), retIndex = array.length;

      for (let index = 0; index < array.length; index++) {
        if (
          order ? iter.call(context, array[index]) > iter.call(context, value) :
            iter.call(context, array[index]) < iter.call(context, value)
        ) {
          retIndex = index;
          break;
        }
      }
      return retIndex;
    },

    findIndex(array, iteratee, context = array) {

      return _.isValueType(array, 'array') ? array.findIndex(iteratee.bind(context)) : -1;
    },

    findLastIndex(array, iteratee, context = array) {

      let index = _.isValueType(array, 'array') ?
        array.reverse().findIndex(
          item => {
            return iteratee.bind(context)(item)
          }
        ) :
        -1;

      return index === -1 ? index : array.length - 1 - index;
    },

    range(start, stop, step = 1) {

      let retArr = [];

      if (arguments.length === 1) {
        stop = start;
        start = 0;
      }

      for (let index = start; step > 0 ? index < stop : index > stop; index += step) {
        retArr.push(index);
      }

      return retArr;
    },
  };

  Object.assign(_, array);
};