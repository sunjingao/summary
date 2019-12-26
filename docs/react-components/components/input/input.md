## Input 输入框

通过鼠标或键盘输入字符。


### 宽高及字体大小
对输入框的宽高及字体大小进行设置
:::demo 设置width，height，fz
```js
constructor(props) {
  super(props);
  this.state = {
    inputValue: ''
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Input placeholder="请输入数据" value={this.state.inputValue} width={300} height={50} fz="20px" onChange={this.onChange}/>
  )
}
```
:::


### 禁止选中
禁止选中
:::demo isDisabled 禁止选中
```js
constructor(props) {
  super(props);
  this.state = {
    inputValue: ''
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Input placeholder="请输入数据" value={this.state.inputValue} isDisabled onChange={this.onChange} />
  )
}
```
:::


### 只读
如使用 readonly
:::demo 只读，设置readonly属性
```js
constructor(props) {
  super(props);
  this.state = {
    inputValue: 'readonly'
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Input placeholder="请输入数据" value={this.state.inputValue} readonly onChange={this.onChange} />
  );
}
```
:::


### 允许清空
展示清空按钮
:::demo 设置 isCleanable 属性
```js
constructor(props) {
  super(props);
  this.state = {
    inputValue: '888'
  };
}

onChange(value) {
  console.log(value);
}

onClear(value) {
  console.log(value);
}

render() {
  return (
    <Input placeholder="请输入数据" value={this.state.inputValue} isCleanable onChange={this.onChange} onClear={this.onClear} />
  )
}
```
:::


### 支持前置和后置图片
通过插槽支持前后置图片  
:::demo 前后置插槽分别为 frontComponent，behindComponent
```js
constructor(props) {
  super(props);
  this.state = {
    inputValue: ''
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Input 
      placeholder="请输入数据" 
      value={this.state.inputValue} 
      onChange={this.onChange} 
      frontComponent={<div className="frontAndBehindImg"/>}
      behindComponent={<div className="frontAndBehindImg"/>}
    />
  );
}
```
:::


### 内置方法
内置 clear，select，focus，blur 等方法供外部调用
:::demo select 使用示例
```js
constructor(props) {
  super(props);
  this.state = {
    inputValue: ''
  };
  this.inputRef = React.createRef();
}

select() {
  this.inputRef.current.selectHandle();
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <div>
      <Input ref={this.inputRef} placeholder="请输入数据" value={this.state.inputValue} onChange={this.onChange} />
      <Button className={'ml5'} type="primary" onClick={this.select.bind(this)}>点击调用内置select方法</Button>
    </div>
  )
}
```
:::


### API

**Input props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 默认展示内容 | number/string | - | '' |
| width | 组件宽度 | number | - | 180 |
| height | 组件高度 | number | - | 40 |
| fz | 输入框的字体大小 | string | - | 0.85rem |
| isDisabled | 是否禁用状态 | boolean | - | - |
| isCleanable | 是否清空输入框 | boolean | - | - |
| isEnableEnter | 开启回车事件 | boolean | - | - |
| textAlign | 文字对齐方式 | string | - | left |
| readonly | 是否只读 | bool | - | - |
| frontComponent | 前置插槽 | node | - | - |
| behindComponent | 后置插槽 | node | - | - |

**Input Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClick | 点击时触发 | event |
| onClear | 清空时触发 | event |
| onChange | 值改变时触发 | value |

**Input Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| clearHandle | 清空内容 | - |
| selectHandle | 选中 | - |
| focusHandle | 聚焦 | - |
| blurHandle | 脱离焦点 | - |

