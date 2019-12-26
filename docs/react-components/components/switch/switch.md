## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。


### 基本用法
基本用法 
:::demo value 设置 初始状态
```js
constructor(props) {
  super(props);
  this.state = {val:true};
}

onToggle(val) {
  console.log(val);
}

render() {
  return (
    <Switch 
      value={this.state.val} 
      onToggle={this.onToggle} 
      beforeComponent={<span>按年付费</span>} 
      behindComponent={<span>按月付费</span>}
    />
  );
}
```
:::


### 字体颜色
自定义字体颜色
:::demo 通过 activeFontColor 和 inactiveFontColor 进行true和false两种状态的字体颜色设置
```js
constructor(props) {
  super(props);
  this.state = {val:true};
}

onToggle(val) {
  console.log(val);
}

render() {
  return (
    <Switch 
      activeFontColor="red" 
      inactiveFontColor="blue" 
      value={this.state.val} 
      onToggle={this.onToggle} 
      beforeComponent={<span>按年付费</span>} 
      behindComponent={<span>按月付费</span>} 
    />
  );
}
```
:::


### 背景颜色
自定义背景颜色
:::demo 通过 activeBgColor 和 inactiveBgColor 进行true和false两种状态的背景颜色设置
```js
constructor(props) {
  super(props);
  this.state = {val:true};
}

onToggle(val) {
  console.log(val);
}

render() {
  return (
    <Switch 
      value={this.state.val} 
      activeBgColor="pink" 
      inactiveBgColor="red" 
      onToggle={this.onToggle} 
      beforeComponent={<span>按年付费</span>} 
      behindComponent={<span>按月付费</span>}
    />
  )
}
```
:::


### 禁用
禁止操作
:::demo 通过设置 isDisabled，禁止操作
```js
constructor(props) {
  super(props);
  this.state = {val:true};
}

onToggle(val) {
  console.log(val);
}

render() {
  return (
    <Switch isDisabled beforeComponent={<span>按年付费</span>} behindComponent={<span>按月付费</span>} />
  )
}
```
:::


### API

**Switch props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定值 | boolean | - | true |
| width | 宽度 | number | - | 40 |
| height | 高度 | number | - | 20 |
| isDisabled | 是否禁止操作 | bool | - | - |
| circleBgColor| 中间的移动的圆的背景颜色 | string | color | #fff |
| inactiveBgColor| 状态为false时的背景颜色 | string | color | #C0CCDA |
| activeBgColor | 状态为true时的背景颜色 | string | color | #409EFF |
| inactiveFontColor | 状态为false时的字体颜色 | string | color | #303133 |
| activeFontColor | 状态为true时的字体颜色 | string | color | #409eff |
| beforeComponent | 前置插槽 | node | - | - |
| behindComponent | 后置插槽 | node | - | - |

**Switch Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onToggle | 改变状态时，触发函数 | 当前状态 |
