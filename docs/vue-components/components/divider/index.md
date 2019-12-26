## Divider 分割线

Divider 分割线

:::demo

```html
<template>
    <divider-base></divider-base>
    <divider-text></divider-text>
    <divider-direction></divider-direction>
</template>
<script>
import dividerBase from './divider-base.md';
import dividerText from './divider-text.md';
import dividerDirection from './divider-direction.md';
export default {
  components: {
    dividerBase,
    dividerText,
    dividerDirection,
  },
}
</script>
```
:::


#### API

**divider props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction| 方向 | string | horizontal / vertical | horizontal |
| position | direction为horizontal，插槽的水平定位 | string | left、right、center | left |
| showLine | 是否展示横线 | boolean | - | true |


**divider slots**

| 插槽名称 | 说明 | 
|---------- |-------- |
| default | 水平插槽的自定义内容 |


