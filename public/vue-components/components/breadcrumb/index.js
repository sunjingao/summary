import Component from './src/breadcrumb.vue';

Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
