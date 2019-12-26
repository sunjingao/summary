import Component from './src/steps.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
