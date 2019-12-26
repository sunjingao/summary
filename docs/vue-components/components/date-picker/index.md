## DatePicker 时间选择器

时间选择器基本用法

:::demo 
```html
<template>
    <date-year></date-year>
    <date-month></date-month>
    <date-date></date-date>
    <date-cleanable></date-cleanable>
    <date-rect></date-rect>
</template>
<script>
import dateYear from './datepicker-year.md';
import dateMonth from './datepicker-month.md';
import dateDate from './datepicker-date.md';
import dateCleanable from './datepicker-cleanable.md';
import dateRect from './datepicker-rect.md';

export default {
  data(){
    return {
    }
  },
  components:{
    dateYear,
    dateMonth,
    dateDate,
    dateCleanable,
    dateRect,
  }
}
</script>
```
:::



#### API

**datePicker props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeRange | 时间范围 | object | require | - |
| showEndTime | 是否展示结束时间 | boolean | - | false |
| placeholder | 不包括结束时间时input默认展示 | string | - | 选择时间 |
| frontPlaceholder/behindPlaceholder | 包括结束时间时input的默认展示 | string | - | 起始时间/结束时间 |
| cleanable | 是否带有清空功能 | boolean | - | - |
| width | input宽度 | number | - | showEndTime ? 200 : 170 |
| height | input高度 | number | - | 40 |

**datePicker Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 组件消失 |  |
| show | 组件显示 |  |

