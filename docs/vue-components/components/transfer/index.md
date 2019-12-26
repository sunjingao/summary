## Transfer 穿梭框

穿梭框

:::demo

```html
<template>
    <transfer-base></transfer-base>
    <transfer-disabled></transfer-disabled>
</template>
<script>
import transferBase from './transfer-base.md';
import transferDisabled from './transfer-disabled.md';
export default {
  components: {
    transferBase,
    transferDisabled
  },
}
</script>
```
:::

#### API

**transfer props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 要展示的内容 | string | 必填项 |  |
| value | 值（将在选中时返回） | string | 必填项 |  |
| disabled | 禁止选中 | boolean | - | false |

**transfer Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 改变选中时触发 | - |

