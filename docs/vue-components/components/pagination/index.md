## Pagination 分页

分页

:::demo

```html
<template>
    <pagination-base></pagination-base>
    <pagination-showbutton></pagination-showbutton>
    <pagination-layout></pagination-layout>
</template>
<script>
import paginationBase from './pagination-base.md';
import paginationShowbutton from './pagination-showbutton.md';
import paginationLayout from './pagination-layout.md';
export default {
  components: {
    paginationBase,
    paginationShowbutton,
    paginationLayout,
  },
}
</script>
```
:::


#### API

**pagination props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| options | 配置信息 | object | - | - |
| options.layout | 设置布局展示内容及展示顺序 | array | 'prev', 'content', 'next', 'sizes', 'jumper' | ['prev', 'content', 'next'] |
| options.isButton  | 展示为button样式 | boolean | - | false |
| options.total | 总条数 | Number | - | 0 |
| options.currentPage |当前选中页 | Number | - | 0 |
| options.pageSizeOption | 条数控制 | Array | - | - |
| options.pageSizeSelectedValue | 默认选中条数 | Number | - | 10 |


**pagination Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| page-change | 选中的内容改变时触发 | 当前选中的页数 |


