import modifiers from '../modifiers/index.js';

// 默认配置
export default {

  // popper 定位位置
  placement: 'bottom',

  // popper改变方向规律：opposite：相反方向、clockwise：顺时针、counterclockwise：逆时针、static：固定位置，不变换
  flip: 'opposite',

  // 是否采用 transform: translate 方式进行移动
  enableTransition: true,

  // 采用的定位是否是position:fixed；若不是，定位为position: absolute
  positionFixed: false,

  // 边界元素， dom选择器、dom对象、“scrollParent”（最近的滚动元素)、viewport（视口，在此等于body元素）
  boundariesElement: 'viewport',

  // 边界元素与popper之间的最小距离
  boundariesPadding: 0,

  // 更新时执行的函数列表,可传部分参数（只改变某个参数，其余参数不变）。
  modifiers,

  // 是否在初始化时就执行并绑定update函数
  updateImmediately: true,

  // 初始化时调用
  onCreate: () => {
  },

  // 执行update时调用
  onUpdate: () => {
  },
};
