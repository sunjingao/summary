## Input 输入框

输入框相关操作

:::demo 
```html
<template>
    <input-width></input-width>
    <input-disabled></input-disabled>
    <input-clean></input-clean>
    <input-minAndMax></input-minAndMax>
    <input-native></input-native>
    <input-frontAndBehind></input-frontAndBehind>
    <input-method></input-method>
</template>
<script>
import inputWidth from './input-width.md';
import inputDisabled from './input-disabled.md';
import inputClean from './input-clean.md';
import inputMinAndMax from './input-minAndMax.md';
import inputNative from './input-native.md';
import inputFrontAndBehind from './input-frontAndBehind.md';
import inputMethod from './input-method.md';

export default {
  data(){
    return {
      inputValue:''
    }
  },
  components:{
    inputWidth,
    inputDisabled,
    inputClean,
    inputMinAndMax,
    inputNative,
    inputFrontAndBehind,
    inputMethod
  }
}
</script>
```
:::



#### API

**input props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 组件宽度 | number | - | - |
| height | 组件高度 | number | - | - |
| fz | 输入框的字体大小 | string | - | 1rem |
| disabled | 是否禁用状态 | boolean | - | false |
| cleanable | 是否清空输入框 | boolean | - | false |
| type | 类型 | string | - | false |
| min | 设置type为number后，可设置范围 | number | - | -Number.MAX_VALUE |
| max| 设置好type为number后，可设置范围 | number | - | Number.MAX_VALUE |

**input Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| clear | 清空内容 |  |
| select | 选中 |  |
| focus | 聚焦 |  |
| blur | 脱离焦点 |  |

