import Component from './src/datepicker.vue';

Component.install = function(Vue) {
    Vue.component(Component.name, Component);
};

export default Component;
