import Component from './src/textarea.vue';

Component.install = function(Vue) {
    Vue.component(Component.name, Component);
};

export default Component;
