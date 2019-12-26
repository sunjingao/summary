import Component from './src/collapse.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
