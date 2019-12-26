## Loading 加载

Loading 加载

:::demo 
```html
<template>
    <loading-all></loading-all>
    <loading-component></loading-component>
    <loading-words></loading-words>
    <loading-service></loading-service>
</template>
<script>

import loadingAll from './loading-all.md';
import loadingComponent from './loading-component.md';
import loadingWords from './loading-words.md';
import loadingService from './loading-service.md';

export default {
  
  components:{
    loadingAll,
    loadingComponent,
    loadingWords,
    loadingService,
  },
  data(){
    return {
    }
  },
}
</script>
```
:::



#### API

**loading-service props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showLoadingIcon | 是否展示loading图片 | boolean | - | true |
| text | 文本 | string | - | - |
| loadingClass | loading样式 | string | - | - |
| contentClass | content区域样回收控制 | string | - | - |
| componentName | 自定义组件名称 | - | string | - |

**loading-directive props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-loading.body | 全屏加载 | - | - | - |
| v-loading | 局部加载 | - | - | - |
| loading-showLoadingIcon | 是否展示loading图片 | boolean | - | true |
| loading-text | 图标下方的加载文字 | string | - | - |
| loading-loadingClass | loading样式 | string | - | - |
| loading-contentClass | content区域类名 | string | - | - |
| loading-componentName | 自定义组件名称 | string | - | - |







