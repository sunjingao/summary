import Component from './src/carousel.vue';

Component.install = function(Vue) {
    Vue.component(Component.name, Component);
};

export default Component;
