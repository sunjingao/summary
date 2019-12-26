import Component from './src/timeline.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
