## Alert 警告

Alert 警告

:::demo 
```html
<template>
    <alert-base></alert-base>
    <alert-theme></alert-theme>
    <alert-close></alert-close>
    <alert-showIcon></alert-showIcon>
    <alert-center></alert-center>
    <alert-description></alert-description>
    <alert-slots></alert-slots>
</template>
<script>

import alertBase from './alert-base.md';
import alertTheme from './alert-theme.md';
import alertClose from './alert-close.md';
import alertShowIcon from './alert-showIcon.md';
import alertCenter from './alert-center.md';
import alertDescription from './alert-description.md';
import alertSlots from './alert-slots.md';

export default {
  
  components:{
    alertBase,
    alertTheme,
    alertClose,
    alertShowIcon,
    alertCenter,
    alertDescription,
    alertSlots,
  },
  data(){
    return {
    }
  },
}
</script>
```
:::



#### API

**alert props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题内容 | string | - | - |
| type | 不同类型对应不同颜色 | success、warning、tip、error | - | tip |
| plain | 展示的淡雅的颜色 | boolean | - | true |
| close-text | 将关闭按钮替换成颜色 | string | - | - |
| showIcon | 是否展示图表 | boolean | - | false |
| textCenter | 是否居中展示 | boolean | - | false |
| description | 描述文字 | string | - | - |
| closable | 点击关闭按钮是否关闭 | boolean | - | true |
| slot | 插槽展示的内容 | title、description | - | - |

**alert Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 点击关闭时触发 | event |


