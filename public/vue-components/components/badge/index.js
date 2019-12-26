import Component from './src/badge.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
