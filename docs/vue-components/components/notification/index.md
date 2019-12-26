## Notification 通知

Notification 通知

:::demo 
```html
<template>
    <notification-base></notification-base>
    <notification-type></notification-type>
    <notification-position></notification-position>
    <notification-offset></notification-offset>
</template>
<script>

import notificationBase from './notification-base.md';
import notificationType from './notification-type.md';
import notificationPosition from './notification-position.md';
import notificationOffset from './notification-offset.md';
export default {
  
  components:{
    notificationBase,
    notificationType,
    notificationPosition,
    notificationOffset,
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

**notification props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeout | 持续时间 | number | - | 3000 |
| 其它 | 属性可参考alert组件配置 | string | - | - |

**notification Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开notification | - |
| close | 关闭notification | - |
| destroy | 销毁notification | - |




