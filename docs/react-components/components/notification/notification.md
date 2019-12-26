## Notification 通知

基本用法。默认从右上角展示


### 基本用法
:::demo 基本用法
```js
onClick() {
  const notification = Notification({
    titleText: '这是一条通知'
  });
  notification.open();
}

render() {
  return (
    <Button onClick={this.onClick.bind(this)}>click</Button>
  )
}
```
:::


### 主题
展示不同的背景颜色
:::demo 设置type属性
```js
onClick(){
  const notification = Notification({
    type: 'success',
    titleText: '这是一条消息提示',
  });
  notification.open();
}

render() {
  return (
    <Button onClick={this.onClick.bind(this)}>click</Button>
  )
}
```
:::


### 位置
展示方位控制
:::demo 设置positionType属性
```js
onClick(position){
  const notification = Notification({
      type: 'success',
      titleText: '这是一条消息提示',
      positionType: position
  });
  notification.open();
}

render() {
  return (
    <div>
      <Button onClick={_ => this.onClick('rightTop')}>rightTop</Button>
      <Button onClick={_ => this.onClick('rightBottom')}>rightBottom</Button>
      <Button onClick={_ => this.onClick('leftBottom')}>leftBottom</Button>
      <Button onClick={_ => this.onClick('leftTop')}>leftTop</Button>
    </div>
  );
}
```
:::


### API

**Notification props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeout | 持续时间 | number | - | 3000 |
| offset | 组件偏移距离 | number | - | - |
| 其它 | 属性可参考alert组件配置 | string | - | - |

**Notification Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开notification | - |
| close | 关闭notification | - |




