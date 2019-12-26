## Radio 单选框

在一组选项中进行单选

:::demo

```html
<template>
    <radio-checked></radio-checked>
    <radio-disabled></radio-disabled>
    <radio-border></radio-border>
    <radio-button></radio-button>
</template>
<script>
import radioChecked from './radio-checked.md';
import radioDisabled from './radio-disabled.md';
import radioBorder from './radio-border.md';
import radioButton from './radio-button.md';
export default {
  components: {
    radioChecked,
    radioDisabled,
    radioBorder,
    radioButton
  },
}
</script>
```
:::

#### API

**radio props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 要展示的内容 | string | 必填项 |  |
| value | 值（将在选中时返回） | string | 必填项 |  |
| disabled | 禁止选中 | boolean | - | false |

**radio-group props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| outBorder | 每个小选项是否展示边框 | boolean | - | false |
| v-model | 需要展示选中状态的值 | string | - |  |
| disabled | 禁止选中 | boolean | - | false |
