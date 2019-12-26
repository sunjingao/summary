import Component from './src/tooltip.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
