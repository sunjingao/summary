import shift from './shift';
import offset from './offset';
import baseBody from './baseBody';
import computeStyle from './computeStyle';
import applyStyle from './applyStyle';

export default {

  // 如果placement含有两部分， 此函数用来设置popper的位置，让它处于相关联的元素的头或尾
  shift: {
    order: 100,
    enabled: true,
    fn: shift,
  },

  // offset可以修改popper在主轴上偏移的距离。
  // offset[1]:主轴上的偏移量，
  // offset[0]:另一个轴上的偏移量，正数向右或向下，
  offset: {
    order: 200,
    enabled: true,
    fn: offset,
    offset: [0, 0],
  },

  // 处理特殊的距离关系，计算popper距离。
  baseBody: {
    order: 400,
    enabled: true,
    fn: baseBody,
  },

  // 计算将应用于popper元素以便正确定位的样式及属性
  computeStyle: {
    order: 500,
    enabled: true,
    fn: computeStyle,
  },

  // 为 popper 元素应用计算后的样式
  applyStyle: {
    order: 600,
    enabled: true,
    fn: applyStyle,
  },
};


