export default function (callback, timeout) {

  let timer, previousTime;

  function execute(...args) {
    previousTime = new Date();
    callback(...args);
  }

  return function (...args) {

    let defferTime, currentTime = (new Date()).getTime();

    previousTime = !previousTime ? currentTime : previousTime;
    defferTime = currentTime - previousTime;

    if (defferTime < timeout) {
      clearTimeout(timer);
      timer = setTimeout(
        function () {
          execute(...args);
        },
        timeout - defferTime
      );
    }
    else {
      clearTimeout(timer);
      execute(...args);
    }
  }
}

