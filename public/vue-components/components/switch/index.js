import Component from './src/switch.vue';

Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
