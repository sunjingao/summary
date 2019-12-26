## Collapse 折叠面板

Collapse 折叠面板

:::demo

```html
<template>
    <collapse-base></collapse-base>
    <collapse-accordion></collapse-accordion>
    <collapse-slot></collapse-slot>
</template>
<script>
import collapseBase from './collapse-base.md';
import collapseAccordion from './collapse-accordion.md';
import collapseSlot from './collapse-slot.md';
export default {
  components: {
    collapseBase,
    collapseAccordion,
    collapseSlot,
  },
}
</script>
```
:::


#### API

**collapse props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model| 当前展开的内容 | array / string | - | - |
| accordion | 最多只能展示一个内容 | boolean | - | false |


**collapse-item props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标识 | string/number | - | - |
| title | 标题内容 | string | - | - |
| disabled | 是否禁止操作 | boolean | - | false |
| showDirection | 是否展示方向箭头 | boolean | - | true |


**collapse Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 有折叠动作时触发 | 当前的name |

**collapse slots**

| 插槽名称 | 说明 | 
|---------- |-------- |
| title | 自定义title |
