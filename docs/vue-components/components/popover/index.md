## Popover 弹出框

分页

:::demo

```html
<template>
    <popover-base></popover-base>
    <popover-slot></popover-slot>
</template>
<script>
import popoverBase from './popover-base.md';
import popoverSlot from './popover-slot.md';

export default {
  components: {
    popoverBase,
    popoverSlot,
  },
}
</script>
```
:::


#### API

**popover props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | 触发方式 | string | hover、focus、click、manual | hover |
| 其它内容  | 参考 v-tooltip文档 | - | - | - |

**popover slots**

| 插槽名称 | 说明 |
|---------- |-------- |
| default | popper依赖元素 |
| popper | popper内容 |



