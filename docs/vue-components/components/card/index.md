## Card 卡片

Card 卡片

:::demo 
```html
<template>
    <card-base></card-base>
    <card-image></card-image>
</template>
<script>

import cardBase from './card-base.md';
import cardImage from './card-image.md';

export default {
  data(){
    return {
    }
  },
  components:{
    cardBase,
    cardImage,
  }
}
</script>
```
:::



#### API

**card props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| headerStyle | 标题处的样式 | object | - | - |
| contentStyle | 内容处的样式 | object | - | - |

**card slots**

| 插槽名称 | 说明 |
|---------- |-------- |
| title | title处的插槽 |
| default | 内容插槽 |



