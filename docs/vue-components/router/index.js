import VueRouter from "vue-router";


const changeLog = () => import(/* webpackChunkName: "changeLog" */ '../components/comp/change-log.vue');
const instructions = () => import(/* webpackChunkName: "instructions" */ '../components/comp/instructions.vue');

const button = () => import(/* webpackChunkName: "button" */ '../components/button/index.md');
const link = () => import(/* webpackChunkName: "link" */ '../components/link/index.md');
const radio = () => import(/* webpackChunkName: "radio" */ '../components/radio/index.md');
const checkbox = () => import(/* webpackChunkName: "checkbox" */ '../components/checkbox/index.md');
const input = () => import(/* webpackChunkName: "input" */ '../components/input/index.md');
const textarea = () => import(/* webpackChunkName: "textarea" */ '../components/textarea/index.md');
const autocomplete = () => import(/* webpackChunkName: "autocomplete" */ '../components/autocomplete/index.md');
const inputNumber = () => import(/* webpackChunkName: "inputNumber" */ '../components/input-number/index.md');
const select = () => import(/* webpackChunkName: "select" */ '../components/select/index.md');
const cascader = () => import(/* webpackChunkName: "cascader" */ '../components/cascader/index.md');
const switchCom = () => import(/* webpackChunkName: "switchCom" */ '../components/switch/index.md');
const slider = () => import(/* webpackChunkName: "slider" */ '../components/slider/index.md');
const timePicker = () => import(/* webpackChunkName: "timePicker" */ '../components/time-picker/index.md');
const datePicker = () => import(/* webpackChunkName: "datePicker" */ '../components/date-picker/index.md');
const rate = () => import(/* webpackChunkName: "rate" */ '../components/rate/index.md');
const transfer = () => import(/* webpackChunkName: "transfer" */ '../components/transfer/index.md');

const tag = () => import(/* webpackChunkName: "tag" */ '../components/tag/index.md');
const progress = () => import(/* webpackChunkName: "progress" */ '../components/progress/index.md');
const tree = () => import(/* webpackChunkName: "tree" */ '../components/tree/index.md');
const pagination = () => import(/* webpackChunkName: "pagination" */ '../components/pagination/index.md');
const badge = () => import(/* webpackChunkName: "rate" */ '../components/badge/index.md');

const alert = () => import(/* webpackChunkName: "alert" */ '../components/alert/index.md');
const loading = () => import(/* webpackChunkName: "loading" */ '../components/loading/index.md');
const message = () => import(/* webpackChunkName: "message" */ '../components/message/index.md');
const messageBox = () => import(/* webpackChunkName: "messageBox" */ '../components/message-box/index.md');
const notification = () => import(/* webpackChunkName: "notification" */ '../components/notification/index.md');

const navMenu = () => import(/* webpackChunkName: "navMenu" */ '../components/nav-menu/index.md');
const tabs = () => import(/* webpackChunkName: "tabs" */ '../components/tabs/index.md');
const breadcrumb = () => import(/* webpackChunkName: "breadcrumb" */ '../components/breadcrumb/index.md');
const pageHeader = () => import(/* webpackChunkName: "pageHeader" */ '../components/page-header/index.md');
const dropdown = () => import(/* webpackChunkName: "dropdown" */ '../components/dropdown/index.md');
const steps = () => import(/* webpackChunkName: "steps" */ '../components/steps/index.md');

const dialog = () => import(/* webpackChunkName: "dialog" */ '../components/dialog/index.md');
const toolTip = () => import(/* webpackChunkName: "toolTip" */ '../components/tool-tip/index.md');
const popover = () => import(/* webpackChunkName: "popover" */ '../components/popover/index.md');
const card = () => import(/* webpackChunkName: "card" */ '../components/card/index.md');
const carousel = () => import(/* webpackChunkName: "carousel" */ '../components/carousel/index.md');
const collapse = () => import(/* webpackChunkName: "collapse" */ '../components/collapse/index.md');
const timeline = () => import(/* webpackChunkName: "timeline" */ '../components/timeline/index.md');
const divider = () => import(/* webpackChunkName: "divider" */ '../components/divider/index.md');
const image = () => import(/* webpackChunkName: "image" */ '../components/image/index.md');
const backtop = () => import(/* webpackChunkName: "backtop" */ '../components/backtop/index.md');
const infiniteScroll = () => import(/* webpackChunkName: "infiniteScroll" */ '../components/infinite-scroll/index.md');

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/instructions'},
    {path: '/change-log', component: changeLog},
    {path: '/instructions', component: instructions},
    {path: '/button', component: button},
    {path: '/link', component: link},
    {path: '/radio', component: radio},
    {path: '/checkbox', component: checkbox},
    {path: '/input', component: input},
    {path: '/textarea', component: textarea},
    {path: '/autocomplete', component: autocomplete},
    {path: '/inputNumber', component: inputNumber},
    {path: '/select', component: select},
    {path: '/cascader', component: cascader},
    {path: '/switchCom', component: switchCom},
    {path: '/slider', component: slider},
    {path: '/timePicker', component: timePicker},
    {path: '/datePicker', component: datePicker},
    {path: '/rate', component: rate},
    {path: '/transfer', component: transfer},

    {path: '/tag', component: tag},
    {path: '/progress', component: progress},
    {path: '/tree', component: tree},
    {path: '/pagination', component: pagination},
    {path: '/badge', component: badge},

    {path: '/alert', component: alert},
    {path: '/loading', component: loading},
    {path: '/message', component: message},
    {path: '/messageBox', component: messageBox},
    {path: '/notification', component: notification},

    {path: '/navMenu', component: navMenu},
    {path: '/tabs', component: tabs},
    {path: '/breadcrumb', component: breadcrumb},
    {path: '/pageHeader', component: pageHeader},
    {path: '/dropdown', component: dropdown},
    {path: '/steps', component: steps},

    {path: '/dialog', component: dialog},
    {path: '/toolTip', component: toolTip},
    {path: '/popover', component: popover},
    {path: '/card', component: card},
    {path: '/carousel', component: carousel},
    {path: '/collapse', component: collapse},
    {path: '/timeline', component: timeline},
    {path: '/divider', component: divider},
    {path: '/image', component: image},
    {path: '/backtop', component: backtop},
    {path: '/infiniteScroll', component: infiniteScroll},
    {path: '*', redirect: '/'},
  ]
})
