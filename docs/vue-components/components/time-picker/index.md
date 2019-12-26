## TimePicker 时间选择器

时间选择器基本用法

:::demo 
```html
<template>
    <time-base></time-base>
    <time-end></time-end>
    <time-clean></time-clean>
    <time-rect></time-rect>
</template>
<script>
import timeBase from './time-base.md';
import timeEnd from './time-showEnd.md';
import timeClean from './time-clean.md';
import timeRect from './time-rect.md';

export default {
  data(){
    return {
    }
  },
  components:{
    timeBase,
    timeEnd,
    timeClean,
    timeRect,
  }
}
</script>
```
:::



#### API

**timePicker props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeRange | 时间范围 | object | require | - |
| showEndTime | 是否展示结束时间 | boolean | - | false |
| placeholder | 不包括结束时间时input默认展示 | string | - | 选择时间 |
| frontPlaceholder/behindPlaceholder | 包括结束时间时input的默认展示 | string | - | 起始时间/结束时间 |
| cleanable | 是否带有清空功能 | boolean | - | - |
| width | 宽度 | number | - | - |
| height | 高度 | number | - | 40 |

**timePicker Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 组件消失 |  |
| show | 组件显示 |  |

