import {once} from "../utils/dom.js"

export default {
  bind(el, binding, vNode) {
    let interVal = null, startTime;

    let downHandler = function () {
      vNode.context[binding.expression].apply();
    };
    let upHandler = function () {
      if (new Date() - startTime < 100) {
        downHandler();
      }
      clearInterval(interVal);
      interVal = null;
    };

    el.addEventListener("mousedown", function (e) {
      startTime = new Date();
      interVal = setInterval(downHandler, 100);
      once(el, "mouseup", upHandler);
    });

  }
}
