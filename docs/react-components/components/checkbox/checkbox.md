## Checkbox 多选

一组备选项中进行多选。


### 单个多选
单个多选框选中与没选中
:::demo 设置一个checkbox即可
```js
constructor(props) {
  super(props);
  this.state = {
    label: 'data',
    sign: true,
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Checkbox 
      label={this.state.label} 
      isChecked={this.state.sign} 
      onChange={this.onChange.bind(this)}
    />
  )
}
```
:::


### 部分选中
分为三种状态：分别是没选中、部分选中、选中。
:::demo 控制 isIndeterminate 属性 控制是否部分选中
```js
constructor(props) {
  super(props);
  this.state = {
    isIndeterminate: true,
    sign: true
  };
}

onPartCheckChange() {
  this.setState({
    isIndeterminate: false
  });
}

onChange() {
  this.setState({
    sign: !this.state.sign,
    isIndeterminate: true
  });
}

render() {
  return (
    <Checkbox 
      label="data1" 
      value="data1" 
      isChecked={this.state.sign}
      isIndeterminate={this.state.isIndeterminate} 
      onPartCheckChange={this.onPartCheckChange.bind(this)} 
      onChange={this.onChange.bind(this)} 
    />
  )
}
```
:::


### 默认选中
展示默认选中项
:::demo 控制value进行多选控制
```js
constructor(props) {
  super(props);
  this.state = {
    checkedArr: ['data1', 'data2'],
  };
}

onChange(value) {
  console.log("onChange:", value);
}

render() {
  return (
    <Checkbox.Group value={this.state.checkedArr} onChange={this.onChange.bind(this)}>
      <Checkbox label="data1" value="data1"/>
      <Checkbox label="data2" value="data2"/>
      <Checkbox label="data3" value="data3"/>
    </Checkbox.Group>
  );
}
```
:::


### 禁止操作
禁止选中
:::demo 控制 isDisabled 属性 控制是否允许选中
```js
constructor(props) {
  super(props);
  this.state = {
    checkedArr1: ['data1', 'data2'],
    checkedArr2: ['data1'],
  };
}

change1(value) {
  console.log('onChange', value);
}

change2(value) {
  console.log('onChange', value);
}

render() {
  
  return (
    <div>
        <Checkbox.Group value={this.state.checkedArr1} onChange={this.change1.bind(this)} isDisabled>
          <Checkbox label="data1" value="data1"/>
          <Checkbox label="data2" value="data2"/>
          <Checkbox label="data3" value="data3"/>
        </Checkbox.Group>
        <br />
        <Checkbox.Group value={this.state.checkedArr2} onChange={this.change2.bind(this)}>
          <Checkbox label="data1" value="data1"/>
          <Checkbox label="data2" value="data2" isDisabled/>
          <Checkbox label="data3" value="data3"/>
        </Checkbox.Group>
    </div>
  )
}
```
:::


### 边框
展示边框
:::demo 添加 outBorder 属性
```js
constructor(props) {
  super(props);
  this.state = {
     checkedArr: ['data1', 'data2'],
  };
}

onChange(value) {
  console.log('onChange', value);
}

render() {
  return (
    <Checkbox.Group hasOutBorder value={this.state.checkedArr} onChange={this.onChange.bind(this)}>
      <Checkbox label="data1" value="data1"/>
      <Checkbox label="data2" value="data2"/>
      <Checkbox label="data3" value="data3"/>
      <Checkbox label="data4" value="data4" isDisabled/>
    </Checkbox.Group>
  )
}
```
:::


### 按钮类型
展示为按钮样式
:::demo 用Button
```js
constructor(props) {
  super(props);
  this.state = {
    checkedArr: ['data1', 'data2'],
  };
}

onChange(value) {
  console.log('onChange', value);
}

render() {
  return (
    <Checkbox.Group value={this.state.checkedArr} onChange={this.onChange.bind(this)}>
      <Checkbox.Button label="data1" value="data1"/>
      <Checkbox.Button label="data2" value="data2"/>
      <Checkbox.Button label="data3" value="data3"/>
      <Checkbox.Button label="data4" value="data4" isDisabled/>
    </Checkbox.Group>
  )
}
```
:::


### API

**Checkbox props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选中时上传的内容 | boolean/string | - | - |
| hasOutBorder | 每个小选项是否展示边框 | boolean | - | - |
| label | 展示的内容 | bool | - | - |
| isDisabled | 禁止操作 | bool | - | - |
| isIndeterminate | 是否部分选中 | bool | - | - |
| isChecked | 是否被选中 | bool | - | - |

**Checkbox.Button props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选中时上传的内容 | boolean/string | - | - |
| label | 展示的内容 | string | - | - |
| isDisabled | 是否禁止操作 | boolean | - | - |

**Checkbox.Group props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 值（将在选中时返回） | array | - | [] |
| isDisabled | 是否禁止操作 | boolean | - | - |
| hasOutBorder | 是否展示边框 | boolean | - | - |

**Checkbox Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 点击选中与不选中时触发 | true/false，event |
| onPartCheckChange | 点击部分选中时触发(只有部分选中时是受控组件) | event |

**Checkbox.Group Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | value | - |
