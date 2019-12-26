## Badge 标记

Badge 标记

:::demo 
```html
<template>
    <badge-base></badge-base>
    <badge-max></badge-max>
    <badge-dot></badge-dot>
</template>
<script>

import badgeBase from './badge-base.md';
import badgeMax from './badge-max.md';
import badgeDot from './badge-dot.md';

export default {
  data(){
    return {
    }
  },
  components:{
    badgeBase,
    badgeMax,
    badgeDot,
  }
}
</script>
```
:::



#### API

**badge props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 要展示的内容 | string | - | - |
| iconClass | 右上角图标的自定义样式 | string | - | - |
| max | 最大值 | number | - | - |
| isDot | 是否显示红点 | boolean | - | false |


