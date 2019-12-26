import Component from './src/popover.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
