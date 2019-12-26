## Link 文字链接
文字超链接


#### 类型

字体颜色类型

:::demo 通过控制 type 属性 控制文字颜色
```html
<template>
    <v-link>链接</v-link>
    <v-link type="primary">链接</v-link>
    <v-link type="success">链接</v-link>
    <v-link type="info">链接</v-link>
    <v-link type="warning">链接</v-link>
    <v-link type="danger">链接</v-link>
</template>
```
:::

#### 禁用状态

文字禁止跳转等操作

:::demo 通过控制 disabled 属性 文字是否禁止跳转等操作
```html
<template>
    <v-link>
        允许操作
    </v-link>
    <v-link disabled>
        禁止操作
    </v-link>
</template>
```
:::

#### 下划线

hover 状态下是否展示下划线

:::demo 通过控制 underline 属性 控制下划线是否在 hover状态下可以展示
```html
<template>
    <v-link>
        有下划线
    </v-link>
    <v-link :underline="false">
        无下划线
    </v-link>
</template>
```
:::

#### 跳转

跳转到设置的url

:::demo 通过控制 href 属性 进行跳转
```html
<template>
    <v-link href="https://www.baidu.com/">
        跳转
    </v-link>
    <v-link href="https://www.baidu.com/" disabled>
        禁止操作
    </v-link>
</template>
```
:::

#### API

**link props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type| 类型 | string | default / success / warning / primary / info / danger | info |
| disabled | 文字是否禁止操作 | boolean | - | false |
| underline | 是否展示下划线 | boolean | - | true |
| href | 跳转 | string | - | '' |


