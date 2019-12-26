
let throttle = function (callback, timeout, options = {}) {

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
};

export {
  throttle
}
