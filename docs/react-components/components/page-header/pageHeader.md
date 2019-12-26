## PageHeader 页头

如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。


### 基本用法
:::demo 基本用法
```js
goBack(){
  console.log('click back');
}

render() {
  return (
    <PageHeader onBack={this.goBack} content="详情页面"/>
  );
}
```
:::


### 自定义展示
自定义标题和展示内容
:::demo 使用标题和内容的默认插槽
```js
goBack(){
  console.log('click back');
}

render() {
  return (
    <PageHeader 
      titleComponent={<div>自定义标题</div>}
      contentComponent={<div>自定义内容</div>}
      onBack={this.goBack} 
    />
  );
}
```
:::


### API

**PageHeader props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | - | 返回 |
| content | 内容 | string | - | - |
| titleComponent | 标题插槽 | node | - | - |
| contentComponent | 内容插槽 | node | - | - |

**PageHeader Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onBack | 点击后退时的回调函数 | - |



