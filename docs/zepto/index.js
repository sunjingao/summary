import Vue from 'vue';
import router from './router/index.js';

import App from './components/comp/app.vue';
import './css/index.css'

// 样式
import '../../public/vue-components/css/base.scss'
// 组件注册
import Button from '../../public/vue-components/components/button/index'
import Backtop from '../../public/vue-components/components/Backtop/index'
import Card from '../../public/vue-components/components/Card/index'
Button.install(Vue);
Backtop.install(Vue);
Card.install(Vue);

// Progress 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// markdown 注冊
import VueMarkdown from 'vue-markdown'
Vue.component('vue-markdown', VueMarkdown);
import demoBox from './components/comp/demo-box.vue'
Vue.component('demo-box', demoBox);

// 美化demo-box展示代码
import 'highlight.js/styles/color-brewer.css';

// vue router 注册
import VueRouter from "vue-router";
Vue.use(VueRouter);

router.beforeEach((to, from, next) => {

  NProgress.start();

  next();

  NProgress.done();
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

new Vue(
  {
    router,
    render: h => h(App)
  }
).$mount('#app');


// 是否为开发模式
const isDevelopment = process.env.NODE_ENV === 'development';
// 是否允许 vue 在启动时生成生产提示。
Vue.config.productionTip = isDevelopment;
// 是否允许 vue-devtools 检查代码
Vue.config.devtools = isDevelopment;

