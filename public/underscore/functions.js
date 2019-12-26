export default function (_) {

  let functions = {

    bind(cb, object, ...args) {

      return function (...args2) {
        return cb.call(object, ...args, ...args2);
      }
    },

    bindAll(object, cbName, context) {

      object[cbName] = object[cbName].bind(context);
    },

    partial(cb, ...args1) {

      return function (...args2) {
        return cb(...args1, ...args2);
      }
    },

    memoize(cb, hasher) {

      let memorize = function (key) {
        let cache = memorize.cache;
        if (_.has(cache, key)) {
          return cache[key];
        }
        let cacheKey = `${hasher ? hasher.apply(this, arguments) : key}`;
        return cache[cacheKey] = cb.apply(this, arguments);
      };
      memorize.cache = {};

      return memorize;
    },

    delay(cb, waitTime, ...args) {

      setTimeout(
        () => {
          cb(...args);
        },
        waitTime
      )
    },

    defer(cb, ...args) {

      setTimeout(
        () => {
          cb(...args);
        }
      )
    },

    throttle(callback, timeout, options = {}) {

      let startTime = '';

      return function () {

        if (!startTime) {

          startTime = new Date().getTime();

          setTimeout(
            _ => {
              startTime = '';
              callback.call(options.context, ...arguments);
            },
            timeout
          );
        }
      }
    },

    debounce(callback, timeout, options = {}) {


      let startTime = '', timer = null;

      return function () {

        if (startTime) {
          clearTimeout(timer);
        }

        startTime = new Date().getTime();

        timer = setTimeout(
          _ => {
            startTime = '';
            callback.call(options.context, ...arguments);
          },
          timeout
        );
      }
    },

    once(cb) {

      let count = 1;

      return function (...args) {
        if (--count >= 0) {
          cb(...args);
        }
      }
    },

    after(num, cb) {

      let count = num;

      return function (...args) {
        if (--count < 0) {
          cb(...args);
        }
      }
    },

    before(num, cb) {

      let count = num;

      return function (...args) {
        if (--count > 0) {
          cb(...args);
        }
      }
    },

    wrap(cb, wrapper) {

      return function (...args) {
        return wrapper(cb, ...args);
      }
    },

    negate(predicate) {

      return function (...args) {
        return !predicate.call(this, ...args);
      };
    },

    compose(...cbs) {

      return function (...args) {
        let len = cbs.length, res = cbs[len - 1](...args);
        for (let index = len - 2; index > 0; index--) {
          res = cbs[index](res);
        }
        return cbs[0](res);
      }
    },
  };

  Object.assign(_, functions);
};