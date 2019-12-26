## Textarea 文本框

文本框相关操作

:::demo 
```html
<template>
    <textarea-base></textarea-base>
    <textarea-auto></textarea-auto>
    <textarea-minmax></textarea-minmax>

</template>
<script>
import textareaBase from './textarea-base.md';
import textareaAuto from './textarea-auto.md';
import textareaMinmax from './textarea-minMax.md';

export default {
  data(){
    return {
      inputValue:''
    }
  },
  components:{
    textareaBase,
    textareaAuto,
    textareaMinmax,
  }
}
</script>
```
:::



#### API

**textarea props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 组件宽度 | number | - | 420 |
| placeholder | 默认 | string | - | 1rem |
| autosize | 是否自适应 | boolean | - | false |
| autosize | 行数范围 | object | - | null |

**textarea Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| clear | 清空内容 |  |
| select | 选中 |  |
| focus | 聚焦 |  |
| blur | 脱离焦点 |  |

