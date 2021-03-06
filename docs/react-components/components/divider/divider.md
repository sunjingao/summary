## Divider 分割线

区隔内容的分割线。


### 基本用法
基础用法
:::demo 基础用法
```js
render() {
  return (
    <div>
      <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
      <Divider/>
      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
    </div>
  )
}
```
:::


### 设置文本
可设置文本及文本展示样式
:::demo 设置position定义展示文本位置
```js
render() {
  return (
    <div>
      <span>头上一片晴天，心中一个想念</span>
      <Divider position="left">少年包青天</Divider>
      <span>饿了别叫妈, 叫饿了么</span>
      <Divider position="center"><i className="iconfont icon-success" /></Divider>
      <span>为了无法计算的价值</span>
      <Divider position="right">阿里云</Divider>
    </div>
  );
}
```
:::


### 垂直分隔
垂直分隔
:::demo 设置direction="vertical"
```js
render() {
  return (
    <div>
      <span>雨纷纷</span>
      <Divider direction="vertical"/>
      <span>旧故里</span>
      <Divider direction="vertical"/>
       <span>草木深</span>
    </div>
  )
}
```
:::


### API

**Divider props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction| 方向 | string | horizontal / vertical | horizontal |
| position | direction为horizontal，插槽的水平定位 | string | left、right、center | left |
