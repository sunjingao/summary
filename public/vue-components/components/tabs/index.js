import Component from './src/tabs.vue';

Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
