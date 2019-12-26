import Component from './src/slider.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
