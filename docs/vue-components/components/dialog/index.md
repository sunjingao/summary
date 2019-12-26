## Dialog 对话框

Dialog 对话框

:::demo 
```html
<template>
    <dialog-base></dialog-base>
    <dialog-center></dialog-center>
    <dialog-nest></dialog-nest>
</template>
<script>

import dialogBase from './dialog-base.md';
import dialogCenter from './dialog-center.md';
import dialogNest from './dialog-nest.md';

export default {
  data(){
    return {
    }
  },
  components:{
    dialogBase,
    dialogCenter,
    dialogNest,
  }
}
</script>
```
:::



#### API

**dialog props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 是否展示 | boolean | - | false |
| title | 标题 | string | - | - |
| center | 标题和footer部分是否居中 | boolean | - | false |
| showClose | 是否展示close按钮 | boolean | - | true |
| width | 宽度 | string | - | 50% |
| closeCallBack | 点击关闭前的回调 | function | - | - |

**dialog slots**

| 插槽名称 | 说明 |
|---------- |-------- |
| title | 标题处的插槽 |
| default | 内容处的插槽 |
| footer | footer处的插槽 |


