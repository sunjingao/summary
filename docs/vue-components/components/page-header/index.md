## PageHeader 页头

PageHeader 页头

:::demo 
```html
<template>
    <pageHeader-base></pageHeader-base>
    <pageHeader-slot></pageHeader-slot>
</template>
<script>

import pageHeaderBase from './pageHeader-base.md';
import pageHeaderSlot from './pageHeader-slot.md';

export default {
  data(){
    return {
    }
  },
  components:{
    pageHeaderBase,
    pageHeaderSlot
  }
}
</script>
```
:::



#### API

**pageHeader props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | - | 返回 |
| content | 内容 | string | - | - |


**pageHeader Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| back | 点击后退时的回调函数 | - |


**pageHeader slots**

| 插槽名称 | 说明 |
|---------- |-------- |
| slot-title | 标题处的插槽 |
| slot-content | 内容处的插槽 |


