## Rate 评分

评分


:::demo

```html
<template>
    <rate-base></rate-base>
    <rate-text></rate-text>
    <rate-readonly></rate-readonly>
</template>
<script>
import rateBase from './rate-base.md';
import rateText from './rate-text.md';
import rateReadonly from './rate-readonly.md';
export default {
  components: {
    rateBase,
    rateText,
    rateReadonly,
  },
}
</script>
```
:::


#### API

**rate props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| iconNo | 数目综合 | number | - | 5 |
| selectNo | 默认选中数 | number | - | 3 |
| text | 选中时展示的问题 | array | - | [] |
| scoreTemplate | 分数 | number | - | -1 |


**rate Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| rateSelectChange | 改变状态时，触发函数 | 触发项 |
