## Tag 标签

用于标记和选择。


### 基本用法
:::demo 
```js
render() {
  return (
    <div>
      <Tag childValue={'标签'}/>
      <Tag type="default" childValue={'标签'}/>    
      <Tag type="primary" childValue={'标签'}/>
      <Tag type="success" childValue={'标签'}/>
      <Tag type="info" childValue={'标签'}/>
      <Tag type="warning" childValue={'标签'}/>
      <Tag type="danger" childValue={'标签'}/>
  </div>
  )
}
```
:::


### 删除
带有删除功能
:::demo 添加 isCloseable 属性
```js
onClose(event) {
  console.log(event)
}

render() {
  return (
    <div>
      <Tag isCloseable onClose={this.onClose} childValue={'标签'}/>
      <Tag type="default" isCloseable onClose={this.onClose} childValue={'标签'}/>   
      <Tag type="primary" isCloseable onClose={this.onClose} childValue={'标签'}/>
      <Tag type="success" isCloseable onClose={this.onClose} childValue={'标签'}/>
      <Tag type="info" isCloseable onClose={this.onClose} childValue={'标签'}/>
      <Tag type="warning" isCloseable onClose={this.onClose} childValue={'标签'}/>
      <Tag type="danger" isCloseable onClose={this.onClose} childValue={'标签'}/>  
    </div>
  )
}
```
:::


### 尺寸设置
尺寸设置用法
:::demo 设置 width 和 height 属性
```js
render() {
  return (
    <Tag width={100} height={50} childValue={'标签'}/>
  )
}
```
:::


### API

**Tag props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string  | default/primary/success/info/warning/danger | default |
| isCloseable | 是否显示删除按钮 | boolean | - | - |
| childValue | 展示的值 | string | - | - |
| width | 宽度 | number/string | - | auto |
| height | 高度 | number/string | - | 32 |

**Tag Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | 关闭时触发的函数 | event |


