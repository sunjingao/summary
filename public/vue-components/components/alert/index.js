import Component from './src/alert.vue';

Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
