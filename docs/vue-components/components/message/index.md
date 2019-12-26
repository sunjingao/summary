## Message 消息提示

Message 消息提示

:::demo 
```html
<template>
    <message-base></message-base>
    <message-type></message-type>
</template>
<script>

import messageBase from './message-base.md';
import messageType from './message-type.md';
export default {
  
  components:{
    messageBase,
    messageType
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

**message props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeout | 持续时间 | number | - | 3000 |
| 其它 | 属性可参考alert组件配置 | string | - | - |

**message Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开message | - |
| close | 关闭message | - |
| destroy | 销毁message | - |




