## Checkbox 多选
多选相关操作


:::demo

```html
<template>
    <checkbox-single></checkbox-single>
    <checkbox-isIndeterminate></checkbox-isIndeterminate>
    <checkbox-checked></checkbox-checked>
    <checkbox-disabled></checkbox-disabled>
    <checkbox-border></checkbox-border>
    <checkbox-button></checkbox-button>
</template>
<script>
import checkboxSingle from './checkbox-single.md';
import checkboxIsIndeterminate from './checkbox-isIndeterminate.md';
import checkboxChecked from './checkbox-checked.md';
import checkboxDisabled from './checkbox-disabled.md';
import checkboxBorder from './checkbox-border.md';
import checkboxButton from './checkbox-button.md';
export default {
  components: {
    checkboxSingle,
    checkboxIsIndeterminate,
    checkboxChecked,
    checkboxDisabled,
    checkboxBorder,
    checkboxButton,
  },
}
</script>
```
:::


#### API

**checkbox props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| outBorder | 每个小选项是否展示边框 | boolean | - | false |
| checkedValue | 需要展示选中状态的值 | array | - | [] |
| disabled| 禁止选中 | boolean | - | false |


**checkbox-group props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 要展示的内容 | string | 必填 |  |
| value | 值（将在选中时返回） | string | 必填 |  |


**checkbox Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| part-check-change | 点击部分选中时触发 | - |
