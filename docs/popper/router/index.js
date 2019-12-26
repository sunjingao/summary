import VueRouter from "vue-router";

const changeLog = () => import(/* webpackChunkName: "changeLog" */ '../components/comp/change-log.vue');

const options = () => import(/* webpackChunkName: "options" */ '../components/options/index.md');
const placement = () => import(/* webpackChunkName: "placement" */ '../components/placement/index.md');
const enableTransition = () => import(/* webpackChunkName: "enableTransition" */ '../components/enableTransition/index.md');
const positionFixed = () => import(/* webpackChunkName: "positionFixed" */ '../components/positionFixed/index.md');
const boundariesElement = () => import(/* webpackChunkName: "boundariesElement" */ '../components/boundariesElement/index.md');
const boundariesPadding = () => import(/* webpackChunkName: "boundariesPadding" */ '../components/boundariesPadding/index.md');
const flip = () => import(/* webpackChunkName: "flip" */ '../components/flip/index.md');
const modifiers = () => import(/* webpackChunkName: "modifiers" */ '../components/modifiers/index.md');
const updateImmediately = () => import(/* webpackChunkName: "updateImmediately" */ '../components/updateImmediately/index.md');
const onCreate = () => import(/* webpackChunkName: "onCreate" */ '../components/onCreate/index.md');
const onUpdate = () => import(/* webpackChunkName: "onUpdate" */ '../components/onUpdate/index.md');
const methods = () => import(/* webpackChunkName: "methods" */ '../components/methods/index.md');


export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/options'},
    {path: '/change-log', component: changeLog},

    {path: '/options', component: options},

    {path: '/placement', component: placement},
    {path: '/enableTransition', component: enableTransition},
    {path: '/positionFixed', component: positionFixed},
    {path: '/boundariesElement', component: boundariesElement},
    {path: '/boundariesPadding', component: boundariesPadding},
    {path: '/flip', component: flip},
    {path: '/modifiers', component: modifiers},
    {path: '/updateImmediately', component: updateImmediately},
    {path: '/onCreate', component: onCreate},
    {path: '/onUpdate', component: onUpdate},
    {path: '/methods', component: methods},


    {path: '*', redirect: '/'}, // 默认路由
  ]
})
