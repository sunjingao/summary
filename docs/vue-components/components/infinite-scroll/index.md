## InfiniteScroll 无限滚动

InfiniteScroll 无限滚动

:::demo

```html
<template>
    <infiniteScroll-base></infiniteScroll-base>
</template>
<script>
import infiniteScrollBase from './infiniteScroll-base.md';
export default {
  components: {
    infiniteScrollBase,
  },
}
</script>
```
:::


#### API

**infinite-scroll props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| infinite-scroll-disabled | 是否禁止 | boolean | - | false |
| infinite-scroll-delay | 节流延时 | string | - | 5****00 |
| infinite-scroll-distance | 触发回调距离 | string | - | 100 |


**infinite-scroll Methods**

| 参数      | 说明          |
|---------- |-------------- |
| callback | 是否禁止，其回调的第一个参数为函数，当结束滚动加载时需调用这个函数 | 


