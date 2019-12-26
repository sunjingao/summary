## Button 按钮

按钮相关操作。


### 宽高
可对按钮的宽高进行设置
:::demo Button 设置width和height属性
```js
onClick(event) {
  console.log(event);
}

render() {
  return (
    <Button width={200} height={50} onClick={this.onClick}>默认按钮</Button>
  )
}
```
:::


### 类型
设置不同的类型，展示不同的颜色 
:::demo type支持default、primary、success、warning、info、danger等几种类型
```js
onClick(event) {
  console.log(event);
}

render() {
  return (
    <div>
      <Button onClick={this.onClick}>默认按钮</Button>
      <Button className={'ml-10'} type="primary" onClick={this.onClick}>主要按钮</Button>
      <Button className={'ml-10'} type="success" onClick={this.onClick}>成功按钮</Button>
      <Button className={'ml-10'} type="info" onClick={this.onClick}>信息按钮</Button>
      <Button className={'ml-10'} type="warning" onClick={this.onClick}>警告按钮</Button>
      <Button className={'ml-10'} type="danger" onClick={this.onClick}>危险按钮</Button>
    </div>
  )
}
```
:::


### 朴素按钮
展示的颜色较为清爽，有边框 
:::demo Button 控制isPlain属性的true / false来实现效果
```js
onClick(event) {
  console.log(event)
}

render() {
  
  return (
    <div>
      <Button isPlain onClick={this.onClick}>默认按钮</Button>
      <Button className={'ml-10'} type="primary" isPlain onClick={this.onClick}>主要按钮</Button>
      <Button className={'ml-10'} type="success" isPlain onClick={this.onClick}>成功按钮</Button>
      <Button className={'ml-10'} type="info" isPlain onClick={this.onClick}>信息按钮</Button>
      <Button className={'ml-10'} type="warning" isPlain onClick={this.onClick}>警告按钮</Button>
      <Button className={'ml-10'} type="danger" isPlain onClick={this.onClick}>危险按钮</Button>
    </div>
  )
}
```
:::


### 圆角按钮
按钮的border有一定倾斜度 
:::demo Button 控制isRound属性的true / false来实现效果
```js
onClick(event) {
  console.log(event)
}

render() {
  return (
    <Button type="primary" isRound onClick={this.onClick}>按钮</Button>
  )
}
```
:::


### 禁止操作
禁止操作按钮
:::demo Button 控制isDisabled属性的true / false 来实现效果
```js
onClick(event) {
  console.log(event)
}

render() {
  return (
    <Button type="primary" isDisabled onClick={this.onClick}>按钮</Button>
  )
}
```
:::


### 加载中
按钮中显示加载图标
:::demo Button 控制isLoading属性的true / false 来实现效果
```js
onClick(event) {
  console.log(event)
}

render() {
  return (
    <Button type="primary" isLoading={true} onClick={this.onClick}>按钮</Button>
  )
}
```
:::


### 按钮集
按钮集合操作，分为横向 和 纵向 
:::demo Button type：horizontal（横向）vertical（纵向）
```js
onClick() {
  console.log('onClick')
}

render() {
  return (
    <div>
      <Button.Group>
        <Button className={'ml-10'} onClick={this.onClick}>按钮</Button>
        <Button type="primary" onClick={this.onClick}>按钮</Button>
      </Button.Group>
    
      <Button.Group type="vertical">
        <Button className={'ml-10'} onClick={this.onClick}>按钮</Button>
        <Button className={'ml-10'} type="primary" onClick={this.onClick}>按钮</Button>
      </Button.Group>    
    </div>
  )
}
```
:::


### API

**Button props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type| 类型 | string | default、primary、success、warning、info、danger | default |
| width | 宽度 | number | - | - |
| height | 高度 | number | - | - |
| isPlain | 是否朴素按钮 | boolean | - | - |
| isRound | 是否圆角按钮 | boolean | - | - |
| isDisabled | 是否禁用状态 | boolean | - | - |
| isLoading | 是否加载中状态 | boolean | - | - |

**Button.Group props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 方向类型 | string | horizontal / vertical | horizontal |

**Button Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClick | 当点击时，触发函数 | event |