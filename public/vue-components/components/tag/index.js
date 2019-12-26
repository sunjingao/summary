import Component from './src/tag.vue';

Component.install = function(Vue) {
    Vue.component(Component.name, Component);
};

export default Component;
