## Radio 单选框

在一组备选项中进行单选。


### 选中
选中内容
:::demo 通过控制value，设置radio选中
```js
constructor(props) {
  super(props);
  this.state = {radioValue: 'data3'};
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Radio.Group value={this.state.radioValue} onChange={this.onChange}>
      <Radio label="xxx" value="data1"/>
      <Radio label="aaa" value="data2"/>
      <Radio label="ppp" value="data3"/>
    </Radio.Group>
  )
}
```
:::


### 禁止操作
禁止选中
:::demo 通过控制disabled属性，设置radio禁止选中
```js
constructor(props) {
  super(props);
  this.state = {
    radioValue1: "data3",
    radioValues2: "data3",
  };
}

onChange1(value) {
  console.log(value);
}

onChange2(value) {
  console.log(value);
}

render() {
  return (
    <div>
      <Radio.Group value={this.state.radioValue1} disabled onChange={this.onChange1}>
        <Radio label="xxx" value="data1"/>
        <Radio label="aaa" value="data2"/>
        <Radio label="ppp" value="data3"/>
      </Radio.Group>
      <Radio.Group className={'ml10'} value={this.state.radioValues2} onChange={this.onChange2}>
        <Radio label="xxx" value="data1"/>
        <Radio label="aaa" value="data2" disabled/>
        <Radio label="ppp" value="data3"/>
      </Radio.Group>
    </div>
  );
}
```
:::


### 边框
设置单选的border样式
:::demo 通过控制outBorder属性，设置radio的border
```js
constructor(props) {
  super(props);
  this.state = {
    radioValue: "data33"
  }
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Radio.Group value={this.state.radioValue} outBorder onChange={this.onChange}>
      <Radio label="xxx" value="data11"/>
      <Radio label="aaa" value="data22"/>
      <Radio label="ppp" value="data33"/>
      <Radio label="ppp" value="data44" disabled/>
    </Radio.Group>
  );
}
```
:::


### button样式
设置单选的样式
:::demo 设置为button样式
```js
constructor(props) {
  super(props);
  this.state = {
    radioValue: "data33"
  };
}

onChange(value) {
  console.log(value);
}

render() {
  return (
    <Radio.Group value={this.state.radioValue} outBorder onChange={this.onChange}>
      <Radio.Button label="xxx" value="data11"/>
      <Radio.Button label="aaa" value="data22"/>
      <Radio.Button label="ppp" value="data33"/>
      <Radio.Button label="ppp" value="data44" disabled/>
    </Radio.Group>
  )
}
```
:::


### API

**Radio props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 要展示的内容 | string | - |  |
| value | 值（将在选中时返回） | string | - | - |
| isDisabled | 禁止选中 | boolean | - | - |

**Radio.Button props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 要展示的内容 | string | - |  |
| value | 值（将在选中时返回） | string | - | - |
| isDisabled | 禁止选中 | boolean | - | - |

**Radio.Group props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 需要展示选中状态的值 | string | - |  |
| isDisabled | 禁止选中 | boolean | - | - |
| hasOutBorder | 每个小选项是否展示边框 | boolean | - | - |

**Radio.Group Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 改变选中项时，触发函数 | 值 |