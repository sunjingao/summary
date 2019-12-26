## Dropdown 下拉菜单

Dropdown 下拉菜单

:::demo 
```html
<template>
    <dropdown-base></dropdown-base>
    <dropdown-hover></dropdown-hover>
    <dropdown-hideOnClick></dropdown-hideOnClick>
    <dropdown-command></dropdown-command>
    <dropdown-split></dropdown-split>
    <dropdown-others></dropdown-others>
</template>
<script>

import dropdownBase from './dropdown-base.md';
import dropdownHover from './dropdown-hover.md';
import dropdownHideOnClick from './dropdown-hideOnClick.md';
import dropdownCommand from './dropdown-command.md';
import dropdownSplit from './dropdown-split.md';
import dropdownOthers from './dropdown-others.md';

export default {
  data(){
    return {
    }
  },
  components:{
    dropdownBase,
    dropdownHover,
    dropdownHideOnClick,
    dropdownCommand,
    dropdownSplit,
    dropdownOthers
  }
}
</script>
```
:::



#### API

**dropdown props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| splitButton | 下拉触发元素呈现为按钮组 | boolean | - | false |
| hoverTrigger | 以hover方式触发下拉框展示 | boolean | - | false |
| hideOnClick | 点击时隐藏下拉框 | boolean | - | true |
| placement | 下拉框初始位置 | - | - | bottom-end |
| 当splitButton属性为真 | 支持其它v-buttonprops | - | - | - |

**dropdown-item props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | 是否禁止选中 | boolean | - | false |
| divided | 是否展示分割线 | boolean | - | false |
| command | 点击时，传递给command函数的value | 任意类型 | - | - |

**dropdown Events**

| 事件名称 | 说明 | 回调函数 |
|---------- |-------- |-------- |
| click | splitButton 为 true 时，点击左侧按钮的回调 | event |
| command | 选中item后回调 | 给v-dropdown-item赋的command, event |

**dropdown Slots**

| Name | 说明 |
|---------- |-------- |
| slot | 当splitButton为真时，为按钮文字部分，否则为依赖元素部分 |

**dropdown-item Slots**

| Name | 说明 |
|---------- |-------- |
| slot | 展示的内容 |
