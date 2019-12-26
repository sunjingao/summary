export default {

  bind(el, binding, vNode) {

    if (typeof binding.value !== "function") {

      let componentName = vNode.context.$options.name,
        msg = `clickoutside parameter is not a function in component`;

      if (componentName) {
        msg += `${componentName}`;
      }
      console.error(msg);
      return;
    }

    let handle = (e) => {
      if (!el.contains(e.target)) {
        binding.value(e,true);
      }
      else{
        binding.value(e,false);
      }
    };

    el.__clickoutsidebys__ = handle;
    document.addEventListener("click", el.__clickoutsidebys__);

  },
  unbind(el) {
    document.removeEventListener("click", el.__clickoutsidebys__);
    el.__clickoutsidebys__ = null;
  }
};

