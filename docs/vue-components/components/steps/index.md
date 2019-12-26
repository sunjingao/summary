## Steps 步骤条

Steps 步骤条

:::demo 
```html
<template>
    <steps-base></steps-base>
    <steps-description></steps-description>
    <steps-slot></steps-slot>
    <steps-center></steps-center>
    <steps-width></steps-width>
    <steps-simple></steps-simple>
    <steps-error></steps-error>
</template>
<script>

import stepsBase from './steps-base.md';
import stepsDescription from './steps-description.md';
import stepsSlot from './steps-slot.md';
import stepsCenter from './steps-center.md';
import stepsWidth from './steps-width.md';
import stepsSimple from './steps-simple.md';
import stepsError from './steps-error.md';

export default {
  data(){
    return {
    }
  },
  components:{
    stepsBase,
    stepsDescription,
    stepsSlot,
    stepsCenter,
    stepsWidth,
    stepsSimple,
    stepsError,
  }
}
</script>
```
:::



#### API

**steps props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| process | 当前处理项的索引 | number | - | 0 |
| error | 当前处理项是否为error | boolean | - | false |
| align-center | 标题和描述是否居中 | boolean | - | false |
| simple | 是否简单模式 | boolean | - | false |
| space | 横线的宽度 | number | - | 自适应 |

**step props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | - | - |
| description | 描述 | string | - | - |


**step slots**

| name      | 说明          |
|---------- |-------------- |
| step | 自定义序列号图形 |
| title | 自定义标题 |
| description | 自定义描述 |
