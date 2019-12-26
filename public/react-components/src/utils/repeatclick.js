import {once} from "./dom.js";

export default {

  bind(element, callback) {

    let interVal = null, startTime;

    let downHandler = function () {
        callback();
      },
      upHandler = function () {
        if (new Date() - startTime < 100) {
          downHandler();
        }
        clearInterval(interVal);
        interVal = null;
      };

    element.addEventListener("mousedown", function (e) {
      startTime = new Date();
      interVal = setInterval(downHandler, 100);
      once(element, "mouseup", upHandler);
    });
  }
}
