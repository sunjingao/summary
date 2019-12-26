import Component from './src/button-group.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
