## Tabs 标签页

Tabs 标签页

:::demo 
```html
<template>
    <tabs-base></tabs-base>
    <tabs-disabled></tabs-disabled>
    <tabs-closable></tabs-closable>
    <tabs-slot></tabs-slot>
    <tabs-type></tabs-type>
    <tabs-position></tabs-position>
</template>
<script>

import tabsBase from './tabs-base.md';
import tabsDisabled from './tabs-disabled.md';
import tabsClosable from './tabs-closable.md';
import tabsSlot from './tabs-slot.md';
import tabsType from './tabs-type.md';
import tabsPosition from './tabs-position.md';

export default {
  data(){
    return {
    }
  },
  components:{
    tabsBase,
    tabsDisabled,
    tabsClosable,
    tabsSlot,
    tabsType,
    tabsPosition,
  }
}
</script>
```
:::



#### API

**tabs props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 当前选中的value | string | - | - |
| type | 选项卡类型 | default/card | - | default |
| closable | 打开close符号 | boolean | - | false |
| position | 位置 | top/right/bottom/left | - | top |

**tab-pane props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选项卡标题 | string | - | - |
| name | 唯一value | string | - | - |
| disabled | 是否禁用 | string | - | - |

**tabs Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| closeItem | 点击关闭时触发 | 当前vue实例 |
| tab-click | 切换标签时触发 | 当前vue实例, event |


