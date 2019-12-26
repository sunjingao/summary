## InputNumber 计数器
在一定范围内，变化数据


:::demo

```html
<template>
    <number-basic></number-basic>
    <number-disabled></number-disabled>
    <number-step></number-step>
    <number-range></number-range>
    <number-position></number-position>
</template>
<script>

import numberBasic from './number-basic.md';
import numberDisabled from './number-disabled.md';
import numberStep from './number-step.md';
import numberRange from './number-range.md';
import numberPosition from './number-position.md';
export default {
  components: {
    numberBasic,
    numberDisabled,
    numberStep,
    numberRange,
    numberPosition,
  },
}
</script>
```
:::


#### API

**inputNumber props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| controlsPosition | 控制点击区域的位置 | string | bothSides / rightSide | bothSides |
| disabled | 是否禁止选中 | boolean | - | false |
| width | input-number组件的宽度 | number | - | 180 |
| height | input-number组件的高度 | number | - | 40 |
| min | 最小值 | number | - | -Number.MAX_VALUE |
| max | 最大值 | number | - | Number.MAX_VALUE |
| step | 每次改变的大小 | number | - | 1 |
| text-align | input中的内容的位置 | string | left/center/right | left |

