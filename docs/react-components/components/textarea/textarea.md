## Textarea 文本框

文本框相关操作。


### 基本用法
最大高度为默认高度
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    text: '123'
  }
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Textarea value={this.state.text} onChange={this.onChange}/>
  )
}
```
:::


### 自适应
高度自适应
:::demo 设置 autosize 属性为true
```js
constructor(props) {
  super(props);
  this.state = {
    text:'123'
  }
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Textarea value={this.state.text} onChange={this.onChange} autosize/>
  )
}
```
:::



### 设置高度范围
设置高度范围
:::demo 设置autosize对象，如 :autosize="{ minRows: 2, maxRows: 4}"
```js
constructor(props) {
  super(props);
  this.state = {
    text:'123'
  }
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Textarea value={this.state.text} autosize={{minRows: 2, maxRows: 4}} onChange={this.onChange}/>
  );
}
```
:::


### API

**Textarea props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 展示内容 | string | - | - |
| placeholder | placeholder 内容 | string | - | 请输入数据 |
| width | 组件宽度 | number | - | 420 |
| fontSize | fontSize 大小 | string | - | 1rem |
| lineHeight | lineHeight 大小 | string | - | 1.5 |
| autosize | 是否自适应 | bool | - | - |
| autosize | 行数范围 | object | - | - |

**Textarea Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 输入内容改变时触发 | value |



