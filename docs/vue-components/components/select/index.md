## Select 选择器

select 当选项过多时，使用下拉来提示并选择内容


:::demo 
```html
<template>
    <select-base></select-base>
    <select-cleanable></select-cleanable>
    <select-template></select-template>
    <select-group></select-group>
    <select-multiple></select-multiple>
</template>
<script>

import selectBase from './select-base.md';
import selectCleanable from './select-cleanable.md';
import selectTemplate from './select-template.md';
import selectGroup from './select-group.md';
import selectMultiple from './select-multiple.md';

export default {
  data(){
    return {
      inputValue:''
    }
  },
  components:{
    selectBase,
    selectCleanable,
    selectTemplate,
    selectGroup,
    selectMultiple
  }
}
</script>
```
:::



#### API

**select props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 默认要展示的内容 | string/array | - | ''/[] |
| injectComponentName | 自定义组件名称 | string | - |  |
| multiple | 是否允许多选 | boolean | - | false |
| 其它input属性 | 可以填写其它input属性 | - | - | - |

**option props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 展示的内容 | string | - |  |
| value | 展示的值 | string | - |  |
| disabled | 是否允许展示 | boolean | - | false |

**select Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click-option | 点击option时触发 | value, label, event |
| clean | 点击input的清除符号触发 | event |


