## Link 文字链接

文字超链接。


### 类型
字体颜色类型
:::demo 通过控制 type 属性 控制文字颜色
```js
render() {
  return (
    <div>
      <Link>链接</Link>
      <Link className={'ml-10'} type="primary">链接</Link>
      <Link className={'ml-10'} type="success">链接</Link>
      <Link className={'ml-10'} type="info">链接</Link>
      <Link className={'ml-10'} type="warning">链接</Link>
      <Link className={'ml-10'} type="danger">链接</Link>
    </div>
  );
}
```
:::


### 禁用状态
文字禁止跳转等操作
:::demo 通过控制 isDisabled 属性 文字是否禁止跳转等操作
```js
render() {
  return (
    <div>
      <Link>允许操作</Link>
      <Link className={'ml-10'} isDisabled>禁止操作</Link>
    </div>
  )
}
```
:::


### 下划线
hover 状态下是否展示下划线
:::demo 通过控制 hasUnderline 属性 控制下划线是否在 hover状态下可以展示
```js
render() {
  return (
    <div>
      <Link>有下划线</Link>
      <Link className={'ml-10'} hasUnderline={false}>无下划线</Link>
    </div>
  )
}
```
:::


### 跳转
跳转到设置的url
:::demo 通过控制 href 属性 进行跳转
```js
render() {
  return (
    <div>
      <Link href="https://www.baidu.com/">跳转</Link>
      <Link className={'ml-10'} href="https://www.baidu.com/" isDisabled>禁止操作</Link>
    </div>
  )
}
```
:::


### API

**Link props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | default / success / warning / primary / info / danger | default |
| isDisabled | 文字是否禁止操作 | boolean | - | - |
| hasUnderline | 是否展示下划线 | boolean | - | true |
| href | 跳转的地址 | string | - | - |


