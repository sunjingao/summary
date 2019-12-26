## NavMenu 导航菜单

Tabs 标签页

:::demo 
```html
<template>
    <nav-menu-top></nav-menu-top>
    <nav-menu-leftbar></nav-menu-leftbar>
</template>
<script>

import navMenuTop from './nav-menu-top.md';
import navMenuLeftbar from './nav-menu-leftbar.md';

export default {
  data(){
    return {
    }
  },
  components:{
    navMenuTop,
    navMenuLeftbar,
  }
}
</script>
```
:::



#### API

**nav-menu props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 当前选中的value | string | - | - |
| type | 选项卡类型 | default/card | - | default |
| closable | 打开close符号 | boolean | - | false |
| position | 位置 | top/right/bottom/left | - | top |

**nav-menu props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选项卡标题 | string | - | - |
| name | 唯一value | string | - | - |
| disabled | 是否禁用 | string | - | - |

**nav-menu Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 点击关闭时触发 | 当前vue实例 |
| tab-click | 切换标签时触发 | 当前vue实例, event |


