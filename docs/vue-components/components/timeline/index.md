## Timeline 时间线

文本框相关操作

:::demo 
```html
<template>
    <timeline-base></timeline-base>
    <timeline-circular></timeline-circular>
    <timeline-timeposition></timeline-timeposition>
    <timeline-slot></timeline-slot>
</template>
<script>
import timelineBase from './timeline-base.md';
import timelineCircular from './timeline-circular.md';
import timelineTimeposition from './timeline-timeposition.md';
import timelineSlot from './timeline-slot.md';

export default {
  data(){
    return {
    }
  },
  components:{
    timelineBase,
    timelineCircular,
    timelineTimeposition,
    timelineSlot
  }
}
</script>
```
:::



#### API

**timeline-item props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| time | 世间 | string | - | - |
| placement | 时间的位置 | string | bottom/top | bottom |
| description | 描述 | string | - | - |
| circularColor | 圆的颜色 | string | - | #e4e7ed |
| lineColor | 线的颜色 | string | - | #e4e7ed |

**timeline-item slots**

| 插槽名称 | 说明 |
|---------- |-------- |
| default | 右侧描述和时间的部分 |
| circular | 自定义圆 |
| line | 自定义线 |


