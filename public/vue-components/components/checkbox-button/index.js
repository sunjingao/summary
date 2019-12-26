import Component from './src/checkbox-button.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
