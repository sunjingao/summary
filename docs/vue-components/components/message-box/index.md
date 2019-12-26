## MessageBox 弹框

MessageBox 弹框

:::demo 
```html
<template>
    <messageBox-message></messageBox-message>
    <messageBox-confirm></messageBox-confirm>
    <messageBox-prompt></messageBox-prompt>
    <messageBox-html></messageBox-html>
    <messageBox-callBack></messageBox-callBack>
</template>
<script>

import messageBoxMessage from './messageBox-message.md';
import messageBoxConfirm from './messageBox-confirm.md';
import messageBoxPrompt from './messageBox-prompt.md';
import messageBoxHtml from './messageBox-html.md';
import messageBoxCallBack from './messageBox-callBack.md';
export default {
  
  components:{
    messageBoxMessage,
    messageBoxConfirm,
    messageBoxPrompt,
    messageBoxHtml,
    messageBoxCallBack,
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

**messageBox props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 弹框类型 | string | message、confirm、prompt | message |
| title | 标题内容 | string | - | - |
| text | content内容 | string | - | - |
| cancelButtonText | 取消按钮中的内容 | string | - | 取消 |
| confirmButtonText | 确认按钮中的内容 | string | - | 确认 |
| cancelCallBack | 点击取消按钮时的回调 | function | - | 如果type为prompt，参数为输入的值 |
| confirmCallBack | 点击确认按钮时的回调 | string | - | 如果type为prompt，参数为输入的值 |
| closeCallBack | 点击关闭符号时的回调 | string | - | 如果type为prompt，参数为输入的值 |


**messageBox Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开messageBox | - |
| close | 关闭messageBox | - |
| destroy | 销毁messageBox | - |




