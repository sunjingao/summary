## Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。


### 基本用法
:::demo 基本用法
```js
render() {
  return (
    <Breadcrumb separator="?">
      <Breadcrumb.Item to="/">首页</Breadcrumb.Item>
      <Breadcrumb.Item><a href="/">活动管理</a></Breadcrumb.Item>
      <Breadcrumb.Item>活动列表</Breadcrumb.Item>
      <Breadcrumb.Item>活动详情</Breadcrumb.Item>
    </Breadcrumb>
  )
}
```
:::


### API

**Breadcrumb props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | - | / |

**Breadcrumb.Item props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | 要跳转到的url | string | - | - |

