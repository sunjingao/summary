import Component from './src/page-header.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
