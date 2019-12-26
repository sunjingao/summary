import Component from './src/cascader.vue';

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
