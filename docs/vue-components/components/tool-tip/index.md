## ToolTip 文字提示

ToolTip 文字提示

:::demo 
```html
<template>
    <tooltip-base></tooltip-base>
    <tooltip-theme></tooltip-theme>
    <tooltip-slot></tooltip-slot>
    <tooltip-disabled></tooltip-disabled>
</template>
<script>

import tooltipBase from './tooltip-base.md';
import tooltipTheme from './tooltip-theme.md';
import tooltipSlot from './tooltip-slot.md';
import tooltipDisabled from './tooltip-disabled.md';
export default {
  data(){
    return {
    }
  },
  components:{
    tooltipBase,
    tooltipTheme,
    tooltipSlot,
    tooltipDisabled,
  }
}
</script>
```
:::



#### API

**tooltip props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| placement | popper位置 | 详见 popper | - | bottom |
| content | 提示内容 | string | - | - |
| theme | 主题 | string | dark/light | dark |
| disabled | 不显示popper | boolean | - | false |
| offset | 偏移量 | number | - | 10 |

**tooltip slots**

| 插槽名称 | 说明 |
|---------- |-------- |
| default | popper依赖元素 |
| popper | popper内容 |


