
## 组件介绍

效果：reference和popper的dom位置随意，可以让popper根据reference在特定的位置展示，并随着reference的移动来改变位置。
要求：box-sizing: border-box。

## reference

:::demo
```html
<template>
    依赖元素，dom选择器或dom对象
</template>
```
:::

## popper

:::demo 
```html
<template>
    弹层元素，dom选择器或dom对象
</template>
```
:::


## Options

| 参数      | 说明    | 类型 | 可选值          | 默认值      | 
|---------- |---------|----------| ------------|----------|
| placement | popper定位位置 | string |top-start、top、top-end、right-start、right、right-end、bottom-end、bottom、bottom-start、left-end、left、left-start | bottom（下方居中） |
| flip | popper改变方向规律 | string | opposite：相反方向、clockwise：顺时针、counterclockwise：逆时针、static：静止 | opposite |
| enableTransition | 是否采用transform: translate方式进行移动 | boolean |- | true |
| positionFixed | 采用的定位是否是position：fixed；若不是，定位为position: absolute | boolean | - | true |
| boundariesElement | 边界元素 | - | dom选择器、dom对象、“scrollParent”（最近的滚动元素）、viewport（视口，在此等于body元素） | viewport |
| boundariesPadding | 边界元素与popper之间的最小距离 | number | - | 0 |
| modifiers | 更新时执行的函数列表,可传部分参数（只改变某个参数，其余参数不变） | - | - | - |
| updateImmediately | 是否在初始化时就执行并绑定update函数 | boolean | - | true |
| onCreate | 初始化时调用 | function | - | - |
| onUpdate | 执行update时调用 | function | - | - |


**Options Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| update | 更新popper位置 | - |
| destroy | 删除resize和scroll绑定事件并清空popper对象 | - |
| enableEventListeners | 绑定更新事件 | - |
| removeEventListeners | 删除更新事件 | - |
| toggle | 切换隐藏和显示 | - |
| show | 展示popper并绑定滚动更新事件，展示时需用此方法 | - |
| hide | 隐藏popper并绑定删除更新事件，隐藏时需用此方法 | - |
| getZIndex | 获得全局最大的zIndex，起始值为1000 | - |
| addZIndex | 当前全局的最大zIndex + 1,并返回这个值 | - |


