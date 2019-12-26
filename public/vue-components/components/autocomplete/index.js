import Component from './src/autocomplete.vue';

Component.install = function (Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
