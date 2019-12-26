## Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。


### 基本用法
基本用法
:::demo 基本用法
```js
onClick() {
  let message = Message({
    titleText: '这是一条消息提示'
  });
  message.open();
}

render() {
  return <Button onClick={this.onClick.bind(this)}>this is button</Button>
}
```
:::


### 主题
展示不同的主题背景
:::demo 设置type值
```js
onClick() {
  let message = Message({
    type: 'success',
    titleText: '这是一条消息提示',
  });
  message.open();
}

render() {
  return (
    <Button onClick={this.onClick.bind(this)}>click</Button>
  )
}
```
:::


### API

**Message props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeout | 持续时间 | number | - | 3000 |
| offset | 偏移量 | number | - | 10(px) |
| 其它 | 属性可参考alert组件配置 | - | - | - |

**Message Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开message | - |
| close | 关闭message | - |




