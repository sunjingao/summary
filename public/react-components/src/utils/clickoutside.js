export default {

  bind(element, callback) {

    let handle = (e) => {
      if (!element.contains(e.target)) {
        callback(true, e);
      }
      else {
        callback(false, e);
      }
    };

    element.__clickoutsidebys__ = handle;
    document.addEventListener("click", element.__clickoutsidebys__);
  },
  unbind(element) {
    document.removeEventListener("click", element.__clickoutsidebys__);
    element.__clickoutsidebys__ = null;
  }
};

