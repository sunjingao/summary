## Button 按钮
按钮相关操作


:::demo 
```html
<template>
    <button-rect></button-rect>
    <button-type></button-type>
    <button-plain></button-plain>
    <button-round></button-round>
    <button-disabled></button-disabled>
    <button-loading></button-loading>
    <button-group></button-group>
</template>
<script>

import buttonRect from './button-rect.md';
import buttonType from './button-type.md';
import buttonPlain from './button-plain.md';
import buttonRound from './button-round.md';
import buttonDisabled from './button-disabled.md';
import buttonLoading from './button-loading.md';
import buttonGroup from './button-group.md';

export default {
  data(){
    return {
    }
  },
  components:{
    buttonRect,
    buttonType,
    buttonPlain,
    buttonRound,
    buttonDisabled,
    buttonLoading,
    buttonGroup,
  }
}
</script>

```
:::

#### API

**button props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽度 | number | - | - |
| height | 高度 | number | - | - |
| type| 类型 | string | default、primary、success、warning、info、danger | default |
| plain | 是否朴素按钮 | boolean | - | false |
| round | 是否圆角按钮 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |
| loading | 是否加载中状态 | boolean | - | false |

**button Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 当点击时，触发函数 | - |

**button-group props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 方向类型 | string | horizontal / vertical | horizontal |


