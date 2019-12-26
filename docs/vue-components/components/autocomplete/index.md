## Autocomplete 搜索提示

input 搜索提示

:::demo 
```html
<template>
    <autocomplete-base></autocomplete-base>
    <auto-inject></auto-inject>
    <auto-input></auto-input>
</template>
<script>

import autocompleteBase from './autocomplete-base.md';
import autoInject from './autocomplete-injectComponent.md';
import autoInput from './autocomplete-input.md';

export default {
  data(){
    return {
      inputValue:''
    }
  },
  components:{
    autocompleteBase,
    autoInject,
    autoInput
  }
}
</script>
```
:::



#### API

**autocomplete props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| popperHeight | popper的item的高度 | number | - | 40 |
| injectComponent | 自定义组件名称 | string | - |  |

**autocomplete Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| query | 当需要展示下拉框时，回调的方法 | 当前item |
| select | 选中时触发 | 当前item |

