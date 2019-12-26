## Image 图片

Image 图片

:::demo

```html
<template>
    <image-base></image-base>
    <image-slot></image-slot>
    <image-lazy></image-lazy>
</template>
<script>
import imageBase from './image-base.md';
import imageSlot from './image-slot.md';
import imageLazy from './image-lazy.md';
export default {
  components: {
    imageBase,
    imageSlot,
    imageLazy,
  },
}
</script>
```
:::


#### API

**image props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| src| 图片地址 | string | - | - |
| alt | 加载中展示的文字 | string | - | - |
| error | 错误时展示的文字 | string | - | - |
| fit | object-fit | string | fill / contain / cover / none / scale-down | fill |
| lazy | 是否懒加载 | boolean | - | false |
| updateTimer | 节流时间 | number | - | 500 |
| showHeight | 当图形与scrollParent的地步的距离小于等于此值是，进行加载 | number | - | 50 |


**image slots**

| 插槽名称 | 说明 | 
|---------- |-------- |
| default | 水平插槽的自定义内容 |


