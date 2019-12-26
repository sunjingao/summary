## InputNumber 计数器

仅允许输入标准的数字值，可定义范围。


### 基础用法
:::demo 基础用法
```js
constructor(props) {
  super(props);
  this.state = {
    counter: 3
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <InputNumber value={this.state.counter} onChange={this.onChange}/>
  )
}
```
:::


### 禁止操作
禁止填写和点击来改变数字
:::demo 添加disabled属性
```js
constructor(props) {
  super(props);
  this.state = {
    counter: 3
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <InputNumber value={this.state.counter} onChange={this.onChange} isDisabled/>
  )
}
```
:::


### 步数
控制每次点击增加 / 减少 改变的大小
:::demo 通过 step 属性控制
```js
constructor(props) {
  super(props);
  this.state = {
    counter: 3
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <InputNumber value={this.state.counter} step={2} onChange={this.onChange}/>
  )
}
```
:::


### 范围
改变区域的范围
:::demo 通过控制 max 和 min 属性
```js
constructor(props) {
  super(props);
  this.state = {
    counter: 3
  };
}

onChange(value) {
  console.log(value);
}


render() {
  return (
    <InputNumber value={this.state.counter} min={-3} max={10} onChange={this.onChange}/>
  )
}
```
:::


### 位置
控制点击区域的位置
:::demo controlsPosition属性的 bothSides 和 rightSide 属性
```js
constructor(props) {
  super(props);
  this.state = {
    counter: 3
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <InputNumber value={this.state.counter} controlsPosition="rightSide" onChange={this.onChange}/>
  )
}
```
:::


### API

**InputNumber props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 输入框的内容 | number | - | 0 |
| controlsPosition | 控制点击区域的位置 | string | bothSides / rightSide | bothSides |
| isDisabled | 是否禁止选中 | boolean | - | - |
| width | input-number组件的宽度 | number | - | 180 |
| height | input-number组件的高度 | number | - | 40 |
| min | 最小值 | number | - | -Number.MAX_VALUE |
| max | 最大值 | number | - | Number.MAX_VALUE |
| step | 每次改变的大小 | number | - | 1 |
| textAlign | input中的内容的位置 | string | left/center/right | center |

**InputNumber Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 改变时触发 | 当前的值 |
