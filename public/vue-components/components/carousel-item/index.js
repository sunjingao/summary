import Component from './src/carousel-item.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
