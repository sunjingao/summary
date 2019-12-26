## Progress 进度条

Progress 进度条

:::demo

```html
<template>
    <progress-base></progress-base>
    <progress-percentage></progress-percentage>
    <progress-description-slot></progress-description-slot>
    <progress-color></progress-color>
    <progress-circle></progress-circle>
</template>
<script>
import progressBase from './progress-base.md';
import progressPercentage from './progress-percentage.md';
import progressDescriptionSlot from './progress-description-slot.md';
import progressColor from './progress-color.md';
import progressCircle from './progress-circle.md';
export default {
  components: {
    progressBase,
    progressPercentage,
    progressDescriptionSlot,
    progressColor,
    progressCircle,
  },
}
</script>
```
:::

#### API

**progress props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percentage | 当前进度 | Number | 必填项 | - |
| type | 进度条类型 | line/circle | - | line |
| width | 线性和圆的进度条的间距 | Number| - | 400 |
| spacing | 间距 | Number | - | 6 |
| format | 自定义展示内容函数 | function | - | - |
| textWidth | 线性进度条的描述内容宽度 | Number | - | 30 |
| textInside | 线性滚动条的描述内容是否在内部 | boolean | - | false |
| bgColor | 选中时的背景颜色 | String | - | #409eff |
| diameter | 圆形进度条的半径 | Number | - | 150 |

