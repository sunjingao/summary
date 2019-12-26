import VueRouter from "vue-router";

const changeLog = () => import(/* webpackChunkName: "changeLog" */ '../components/comp/change-log.vue');
const core = () => import(/* webpackChunkName: "core" */ '../components/core/index.md');

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/core/.init'},
    {path: '/change-log', component: changeLog},

    {path: '/core/:id', component: core},

    {path: '*', redirect: '/'}, // 默认路由
  ]
})
