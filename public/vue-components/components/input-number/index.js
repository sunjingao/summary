import Component from './src/input-number.vue';

Component.install = function(Vue) {
    Vue.component(Component.name, Component);
};

export default Component;
