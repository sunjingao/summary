## Alert 警告

用于页面中展示重要的提示信息。


### 基本用法
页面中的非浮层元素，不会自动消失。
:::demo Alert 基本用法
```js
onClose(event) {
  console.log(event);
}

render() {
  return (
    <Alert titleText="this is title" onClose={this.onClose} />
  )
}
```
:::

### 主题
展示不同的主题颜色
:::demo Alert 组件提供四种主题，由type属性指定，默认值为tip。
```js
onClose(event) {
  console.log(event);
}

render() {
  return (
    <div>
      <Alert titleText="this is title" type="success" onClose={this.onClose}/>
      <Alert titleText="this is title" type="warning" className="alert-mt10" onClose={this.onClose}/>
      <Alert titleText="this is title" type="tip" className="alert-mt10" onClose={this.onClose}/>
      <Alert titleText="this is title" type="error" className="alert-mt10" onClose={this.onClose}/>
           
      <Alert titleText="this is title" type="success" isPlain={false} onClose={this.onClose}/>
      <Alert titleText="this is title" type="warning" isPlain={false} className="alert-mt10" onClose={this.onClose}/>
      <Alert titleText="this is title" type="tip" isPlain={false} className="alert-mt10" onClose={this.onClose}/>
      <Alert titleText="this is title" type="error" isPlain={false} className="alert-mt10" onClose={this.onClose}/>
    </div>
  )
}
```
:::


### 设置关闭处的文字内容
设置关闭处的文字内容
:::demo Alert 设置closeText属性
```js
onClose(event) {
  console.log(event);
}

render() {
  return (
    <Alert titleText="this is title" closeText="知道了" onClose={this.onClose}/>
  )
}
```
:::


### 带有icon
不同类型带有不同的icon
:::demo Alert 设置isShowIcon属性
```js
onClose(event) {
  console.log(event);
}

render() {
  return (
    <div>
      <Alert titleText="this is title" isShowIcon type="success" onClose={this.onClose} />
      <Alert titleText="this is title" descriptionText="this is description" isShowIcon type="warning" className="alert-mt10" onClose={this.onClose} />
      <Alert titleText="this is title" descriptionText="this is description" isShowIcon type="tip" className="alert-mt10" onClose={this.onClose} />
      <Alert titleText="this is title" descriptionText="this is description" isShowIcon type="error" className="alert-mt10" onClose={this.onClose} />  
    </div>
  )
}
```
:::


### 居中
图标和文字居中展示
:::demo Alert 设置 isTextCenter 属性
```js
onClose(event) {
  console.log(event);
}

render() {
  return (
    <div>
      <Alert titleText="this is title" isTextCenter descriptionText="this is description" onClose={this.onClose}/>
      <Alert titleText="this is title" isTextCenter descriptionText="this is description" isShowIcon className="alert-mt10" onClose={this.onClose}/>
    </div>
  )
}
```
:::


### 设置描述文字
设置描述文字
:::demo Alert 设置descriptionText属性
```js
onClose(event) {
  console.log(event);
}

render() {
  return (
    <Alert titleText="this is title" descriptionText="this is description" onClose={this.onClose}/>
  )
}
```
:::


### 自定义展示内容
自定义展示内容
:::demo 设置titleComponent、descriptionComponent插槽
```js
onClose(event) {
  console.log(event);
}

render() {
  
  return (
    <Alert 
      type="success" 
      titleComponent={<div slot="title">haha title</div>} 
      descriptionComponent={<div slot="description">haha description</div>}
      onClose={this.onClose} 
    />
  )
}
```
:::


### API

**Alert props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 不同类型对应不同颜色 | success、warning、tip、error | - | tip |
| isPlain | 展示的淡雅的颜色 | boolean | - | true |
| isClosable | 点击关闭按钮是否关闭 | boolean | - | true |
| isShowIcon | 是否展示图标 | boolean | - | - |
| isTextCenter | 是否居中展示 | boolean | - | - |
| zIndex | 层级 | number | - | - |
| titleText | 标题文字 | string | - | - |
| descriptionText | 描述文字 | string | - | - |
| closeText | 关闭文字 | string | - | - |
| titleComponent | 标题插槽 | node | - | - |
| descriptionComponent | 描述插槽 | node | - | - |
| closeComponent | 关闭插槽 | node | - | - |

**Alert Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | 点击关闭时触发 | event |
| register | 注册实例组件 | event |
