## Autocomplete 搜索提示

自动完成。


### 基本用法
设置选中内容的value，用户输入时回调onQuery方法，用户选中时回调onSelect方法
:::demo Autocomplete 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    text: '123',
    ary: [
      {label: 1},
      {label: 2},
      {label: 3},
      {label: 4},
      {label: 5},
      {label: 6},
      {label: 7},
      {label: 8},
      {label: 9},
      {label: 10},
      {label: 11},
      {label: 12},
      {label: 13},
      {label: 14},
      {label: 15},
    ]
  };
}

onQuery(val, cb) {
  console.log('onQuery', val);
  cb(this.state.ary);
}

onSelect(val) {
  console.log('onSelect:',val);
}

render() {
  return (
    <Autocomplete 
      value={this.state.text} 
      onQuery={this.onQuery.bind(this)} 
      onSelect={this.onSelect.bind(this)}
    />
  )
}
```
:::


### 自定义模板
自定义条目的展示样式
:::demo Autocomplete 使用 itemComponent 注入组件
```js
constructor(props) {
  super(props);
  this.state = {
    text: '123',
    ary: [
      {label: 1, value: 11},
      {label: 2, value: 22},
      {label: 3, value: 33},
      {label: 4, value: 44},
      {label: 5, value: 55},
      {label: 6, value: 66},
      {label: 7, value: 77},
      {label: 8, value: 88},
      {label: 9, value: 99},
      {label: 10, value: 100},
      {label: 11, value: 110},
      {label: 12, value: 120},
      {label: 13, value: 130},
      {label: 14, value: 140},
      {label: 15, value: 150},
    ]
  };
}

onQuery(val, cb) {
  console.log('onQuery:', val);
  cb(this.state.ary);
}

onSelect(val) {
  console.log('onSelect:',val);
}

render() {
  
  class ItemComponent extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    render() {
      return (<div>label:{this.props.item.label} value:{this.props.item.value}</div>);
    }
  }
  
  return (
    <Autocomplete 
      value={this.state.text} 
      onQuery={this.onQuery.bind(this)} 
      onSelect={this.onSelect.bind(this)} 
      itemComponent={<ItemComponent/>}
    />
  )
}
```
:::


### 设置展示框
设置展示框图片等内容
:::demo Autocomplete 设置 frontComponent 和 behindComponent 插槽
```js
constructor(props) {
  super(props);
  this.state = {
    text: '123',
    ary: [
      {label: 1, value: 11},
      {label: 2, value: 222},
      {label: 3, value: 33},
      {label: 4, value: 44},
      {label: 5, value: 55},
      {label: 6, value: 66},
      {label: 7, value: 77},
      {label: 8, value: 88},
      {label: 9, value: 99},
      {label: 10, value: 100},
      {label: 11, value: 100},
      {label: 12, value: 100},
      {label: 13, value: 100},
      {label: 14, value: 100},
      {label: 15, value: 100},
    ]
  };
}

onQuery(val, cb) {
  console.log('onQuery:', val);
  cb(this.state.ary);
}

onSelect(val) {
  console.log('onSelect:', val);
}

render() {
  return (
    <Autocomplete 
      value={this.state.text} 
      onQuery={this.onQuery.bind(this)} 
      onSelect={this.onSelect.bind(this)}
      frontComponent={<div className="auto-slot-test"/>}
      behindComponent={<div className="auto-slot-test"/>}
    />
  )
}
```
:::


### API

**Autocomplete props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 输入框的值 | string | - | - |
| itemHeight | popper的item的高度 | number | - | 40 |
| itemComponent | 自定义展示item | node | - | - |
| frontComponent | input组件前置插槽 | node | - | - |
| behindComponent | input组件后置插槽 | node | - | - |

**Autocomplete Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onQuery | 当需要展示下拉框时，回调的方法 | 当前value，回调函数 |
| onSelect | 选中时触发 | 当前item |

