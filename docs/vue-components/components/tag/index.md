## Tag 标签

标签基本用法

:::demo 
```html
<template>
    <tag-base></tag-base>
    <tag-remove></tag-remove>
    <tag-size></tag-size>
</template>
<script>
import tagBase from './tag-base.md';
import tagRemove from './tag-remove.md';
import tagSize from './tag-size.md';

export default {
  data(){
    return {
    }
  },
  components:{
    tagBase,
    tagRemove,
    tagSize,
  }
}
</script>
```
:::



#### API

**tag props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 组件宽度 | number | - | auto |
| height | 组件高度 | number | - | 32 |
| closeable | 是否显示删除按钮 | boolean | - | false |
| type | 类型 | ''/default/primary/success/info/warning/danger  | - | '' |

**tag Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 组件关闭 | event |


