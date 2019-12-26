## Badge 标记

出现在按钮、图标旁的数字或状态标记。


### 基本用法
基本用法展示。
:::demo Badge 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    val:'10'
  }
}

render() {
  return (
    <div>
      <Badge><Button>button</Button></Badge>
      <Badge value={this.state.val} className='ml5'><Button>button</Button></Badge>
      <Badge value={this.state.val} iconClass="badge-test" className='ml5'><Button>button</Button></Badge>
    </div>
  )
}
```
:::


### 最大值设置
超过最大值，使用+
:::demo Badge 设置max值
```js
constructor(props) {
  super(props);
  this.state = {
    val1:'10',
    val2:'100',
  }
}

render() {
  return (
    <div>
      <Badge value={this.state.val1} max={9}><Button>button</Button></Badge>
      <Badge value={this.state.val2} max={99} className='ml5'><Button>button</Button></Badge>
    </div>
  )
}
```
:::


### 小红点
右上角以小红点形式进行提示
:::demo Badge 设置isDot属性
```js
constructor(props) {
  super(props);
  this.state = {
    val:'10'
  }
}

render() {
  return (
    <Badge value={this.state.val} className='ml5' isDot><Button>button</Button></Badge>
  )
}

```
:::


### API

**Badge props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 要展示的内容 | string，number | - | - |
| iconClass | 右上角图标的自定义样式 | string | - | - |
| max | 最大值 | number | - | - |
| isDot | 是否显示红点 | boolean | - | - |


