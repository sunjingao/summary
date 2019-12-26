import Component from './src/timeline-item.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
