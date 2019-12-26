## Backtop 回到顶部

Backtop 回到顶部

:::demo

```html
<template>
    <backtop-slot></backtop-slot>
    <backtop-part></backtop-part>
</template>
<script>
import backtopSlot from './backtop-slot.md';
import backtopPart from './backtop-part.md';
export default {
  components: {
    backtopSlot,
    backtopPart,
  },
}
</script>
```
:::


#### API

**backtop props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selector | 选择器 | 触发滚动的元素，如果使用页面作为根元素，传root | root、selectot | root |
| visibility-height | 滚动高度达到此参数值才出现 | number | - | 200 |
| right | 页面右边距离 | number | - | 40 |
| bottom | 页面底部距离 | number | - | 40 |
| timeout | 节流时间 | number | - | 500 |


**backtop slots**

| 插槽名称 | 说明 | 
|---------- |-------- |
| default | 内容插槽 |


**backtop Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击按钮时触发 | event |




