## Rate 评分

评分组件。


### 基本用法
基本用法
:::demo 基本用法
```js
onHover(val) {
  console.log('onHover：' + val);
}

onChange(val) {
  console.log('onChange：' + val);
}

render() {
  return (
    <Rate onHover={this.onHover} onChange={this.onChange}/>
  )
}
```
:::


### 辅助文字
自定义展示内容
:::demo 设置text
```js
constructor(props) {
  super(props);
  this.state = {
    text: [11,22,33,44,55]
  };
}

onHover(val) {
  console.log('onHover：' + val);
}

onChange(val) {
  console.log('当前内容：' + val);
}

render() {
  return (
    <Rate text={this.state.text} onHover={this.onHover} onChange={this.onChange}/>
  )
}
```
:::


#### 只读
只读，不可操作。允许图标部分选中。
:::demo 设置 scoreTemplate，允许小数
```js
onHover(val) {
  console.log('onHover：' + val);
}

onChange(val) {
  console.log('当前内容：' + val);
}

render() {
  return (
    <Rate scoreTemplate={3.5} onHover={this.onHover} onChange={this.onChange}/>
  )
}
```
:::


### API

**Rate props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| iconNo | 数目总和 | number | - | 5 |
| selectNo | 默认选中数 | number | - | 3 |
| scoreTemplate | 分数，有此项时，内容不可改变 | number | - | - |
| text | 选中时展示的问题 | array | - | [] |


**Rate Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onHover | 浮动时，触发函数 | 触发项 |
| onChange | 改变状态时，触发函数 | 触发项 |
