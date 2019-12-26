/**
 * 集合处理
 */

export default function (_) {

  // 回调函数绑定作用域，并执行
  function configureCb(context, cb, ...args) {

    return cb.apply(context, args);
  }

  // 将伪数组转为数组，其它原样返回
  function handleCollection(collection) {

    return _.isValueType(collection, 'object') && _.has(collection, 'length') ?
      [].slice.call(collection) : collection
  }

  // 集合方法
  let collections = {

    each(list, iteratee, context = list) {

      let collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        configureCb(context, iteratee, value, key, list);
      }

      return list;
    },

    map(list, iteratee, context = list) {

      let collection = handleCollection(list), keys = _.keys(collection);

      return Array.from({length: keys.length}).map(
        (value, key) => configureCb(context, iteratee, collection[keys[key]], keys[key], list)
      );
    },

    reduce(list, iteratee, memo, context = list) {

      let retValue = null,
        startIndex = 0,
        collection = handleCollection(list),
        keys = _.keys(collection);

      if (memo === undefined) {
        startIndex = 1;
        retValue = collection[0];
      }
      else {
        startIndex = 0;
        retValue = memo;
      }

      for (let index = startIndex; index < keys.length; index++) {
        retValue = configureCb(context, iteratee, retValue, collection[keys[index]], index);
      }

      return retValue;
    },

    reduceRight(list, iteratee, memo, context = list) {

      let retValue = null,
        startIndex = 0,
        collection = handleCollection(list),
        keys = _.keys(collection);

      if (memo === undefined) {
        startIndex = keys.length - 2;
        retValue = collection[keys[startIndex]];
      }
      else {
        startIndex = keys.length - 1;
        retValue = memo;
      }

      for (let index = startIndex; index >= 0; index--) {
        retValue = configureCb(context, iteratee, retValue, collection[keys[index]], index);
      }

      return retValue;
    },

    find(list, iteratee, context = list) {

      let collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        if (configureCb(context, iteratee, value, key, list)) {
          return value;
        }
      }
    },

    filter(list, iteratee, context = list) {

      let retArr = [], collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        if (configureCb(context, iteratee, value, key, list)) {
          retArr.push(value);
        }
      }
      return retArr;
    },

    findWhere(list, properties) {

      let collection = handleCollection(list);

      return _.find(collection, _.matcher(properties), list);
    },

    where(list, properties) {

      let collection = handleCollection(list);

      return _.filter(collection, _.matcher(properties), list);
    },

    reject(list, iteratee, context = list) {

      let collection = handleCollection(list);

      return _.filter(collection, _.negate(iteratee), context);
    },

    every(list, iteratee, context = list) {

      let collection = handleCollection(list), entries = _.entries(collection);

      if (entries.length === 0) {
        return false;
      }

      for (let [key, value] of entries) {
        if (!configureCb(context, iteratee, value, key, list)) {
          return false;
        }
      }
      return true;
    },

    some(list, iteratee = _.identity, context = list) {

      let collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        if (configureCb(context, iteratee, value, key, list)) {
          return true;
        }
      }
      return false;
    },

    contains(list, value, fromIndex = 0) {

      let collection = handleCollection(list);

      return _.values(collection).slice(fromIndex).includes(value);
    },

    invoke(list, methodName, ...args) {

      let collection = handleCollection(list);

      return _.map(
        collection,
        function (item) {
          let func = _.isValueType(methodName, 'function') ? methodName : item[methodName];
          return func.call(item, ...args)
        },
        list
      );
    },

    pluck(list, propertyName) {

      let collection = handleCollection(list);

      return _.map(collection, _.property(propertyName), list);
    },

    max(list, iteratee = _.identity, context = list) {

      let collection = handleCollection(list), maxValue = -Infinity, retValue;

      for (let [key, value] of _.entries(collection)) {
        let val = configureCb(context, iteratee, value, key, list);
        if (maxValue < val) {
          maxValue = val;
          retValue = value;
        }
      }

      return retValue;
    },

    min(list, iteratee = _.identity, context = list) {

      let collection = handleCollection(list), minValue = Infinity, retValue;

      for (let [key, value] of _.entries(collection)) {
        let val = configureCb(context, iteratee, value, key, list);
        if (minValue > val) {
          minValue = val;
          retValue = value;
        }
      }

      return retValue;
    },

    sortBy(list, iteratee, context = list) {

      let collection = handleCollection(list);

      return _.pluck(
        _.map(
          collection,
          (value, key) => {
            let newValue = _.isValueType(iteratee, 'function') ? configureCb(context, iteratee, value, key) : value[iteratee];
            return {
              oriValue: value,
              newValue: newValue,
            }
          }).sort(
          (v1, v2) => {
            if (v1.newValue > v2.newValue) return 1;
            if (v1.newValue < v2.newValue) return -1;
            return 0;
          }
        ),
        'oriValue'
      );
    },

    groupBy(list, iteratee, context = list) {

      let retObj = {}, iter = _.isValueType(iteratee, 'function') ? iteratee : item => item[iteratee],
        collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        let objKey = configureCb(context, iter, value, key);
        retObj[objKey] ? retObj[objKey].push(value) : retObj[objKey] = [value];
      }
      return retObj;
    },

    indexBy(list, iteratee, context = list) {

      let retObj = {}, iter = _.isValueType(iteratee, 'function') ? iteratee : item => item[iteratee],
        collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        retObj[configureCb(context, iter, value, key)] = value;
      }
      return retObj;
    },

    countBy(list, iteratee, context = list) {

      let retObj = {}, iter = _.isValueType(iteratee, 'function') ? iteratee : item => item[iteratee],
        collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        let objKey = configureCb(context, iter, value, key);
        retObj[objKey] ? retObj[objKey]++ : retObj[objKey] = 1;
      }
      return retObj;
    },

    shuffle(list) {

      let values = _.values(handleCollection(list)), retArr = [];

      while (values.length > 0) {
        let index = Math.floor(Math.random() * values.length);
        retArr.push(values[index]);
        values.splice(index, 1);
      }

      return retArr;
    },

    sample(list, n = 1) {

      let collection = handleCollection(list), values = _.values(collection);

      if (n === 1) {
        return values[Math.floor(Math.random() * values.length)];
      }
      else {
        return _.shuffle(collection).slice(0, n);
      }
    },

    toArray(list) {

      return _.isValueType(list, 'collection') ? [].slice.call(list) : _.values(list);
    },

    size(list) {

      return _.isValueType(list, 'collection') ? list.length : _.keys(list).length;
    },

    partition(list, iteratee) {

      let retArray = [[], []], collection = handleCollection(list);

      for (let [key, value] of _.entries(collection)) {
        let sign = configureCb(list, iteratee, value, key);
        sign ? retArray[0].push(value) : retArray[1].push(value);
      }
      return retArray;
    },

    compact(list) {

      return _.filter(list, _.identity);
    },
  };

  // 将集合方法合并到 _ 上
  Object.assign(_, collections);
};