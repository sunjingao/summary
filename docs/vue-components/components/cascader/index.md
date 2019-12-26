## Cascader 级联选择器

cascader 级联选择器

:::demo 
```html
<template>
    <cascader-base></cascader-base>
    <cascader-hover></cascader-hover>
    <cascader-disabled></cascader-disabled>
    <cascader-cleanable></cascader-cleanable>
    <cascader-lastLevel></cascader-lastLevel>
    <cascader-component></cascader-component>
</template>
<script>

import cascaderBase from './cascader-base.md';
import cascaderHover from './cascader-hover.md';
import cascaderDisabled from './cascader-disabled.md';
import cascaderCleanable from './cascader-cleanable.md';
import cascaderLastLevel from './cascader-lastLevel.md';
import cascaderComponent from './cascader-component.md';

export default {
  data(){
    return {
    }
  },
  components:{
    cascaderBase,
    cascaderHover,
    cascaderDisabled,
    cascaderCleanable,
    cascaderLastLevel,
    cascaderComponent,
  }
}
</script>
```
:::



#### API

**cascader props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tipArray | 要展示的内容 | object | - | - |
| hoverTrigger | 是否hover触发 | boolean | - | false |
| cleanable | 是否可清空 | boolean | - | false |
| showAllLevels | 是否只展示最后一级 | boolean | - | false |
| disabled | tipArray的中的item是否禁止选中 | boolean | - | false |
| selected | tipArray的中的item是否默认选中 | boolean | - | false |
| width | input的宽度 | number | - | 170 |
| height | input的高度 | number | - | 40 |
| popperMaxHeight | 下拉框的最大高度 | number | - | 210 |
| itemWidth | 自动提示组件中每条数据的宽度 | number | - | 150 |
| itemHeight | 自动提示组件中每条数据的高度 | number | - | 30 |

**cascader Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| autoSelected | 被选中时的回调方法 | 当前item |

