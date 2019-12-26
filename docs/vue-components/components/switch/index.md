## Switch 开关

状态切换,代表开关的圆在右侧表示为true的状态，在左侧时表示false的状态


:::demo 
```html
<template>
    <switch-base></switch-base>
    <switch-color></switch-color>
    <switch-bgcolor></switch-bgcolor>
    <switch-disabled></switch-disabled>
</template>
<script>

import switchBase from './switch-base.md';
import switchColor from './switch-color.md';
import switchBgcolor from './switch-bgcolor.md';
import switchDisabled from './switch-disabled.md';

export default {
  data(){
    return {
    }
  },
  components:{
    switchBase,
    switchColor,
    switchBgcolor,
    switchDisabled,
  }
}
</script>
```
:::


#### API

**switch props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽度 | number | - | 40 |
| height | 高度 | number | - | 20 |
| circleBgColor| 中间的移动的圆的背景颜色 | string | color | #fff |
| inactiveBgColor| 状态为false时的背景颜色 | string | color | #C0CCDA |
| activeBgColor | 状态为true时的背景颜色 | string | color | #409EFF |
| inactiveFontColor | 状态为false时的字体颜色 | string | color | #303133 |
| activeFontColor | 状态为true时的字体颜色 | string | color | #409eff |
| value | 绑定值 | boolean | - | true |

**switch Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| input | 改变状态时，触发函数 | 当前状态 |
