## Slider 滑块

文本框相关操作

:::demo 
```html
<template>
    <slider-base></slider-base>
    <slider-step></slider-step>
    <slider-marks></slider-marks>
</template>
<script>
import sliderBase from './slider-base.md';
import sliderStep from './slider-step.md';
import sliderMarks from './slider-marks.md';

export default {
  data(){
    return {
    }
  },
  components:{
    sliderBase,
    sliderStep,
    sliderMarks,
  }
}
</script>
```
:::



#### API

**slider props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 初始值 | Number | - | 0 |
| min | 最小值 | Number | - | 0 |
| max | 最大值 | Number | - | 100 |
| step | 间距 | Number | - | 1 |
| showTooltip | 是否展示tooltip | boolean | - | true |
| formatTooltip | tooltip内容自定义 | function | - | - |
| showStops | 将每点展示出来 | boolean | - | false |
| marks | tooltip自定义 | Array | - | - |
| disabled | 禁止操作 | boolean | - | false |


**slider Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 点击或滑动结束后触发 | 当前百分数 |


