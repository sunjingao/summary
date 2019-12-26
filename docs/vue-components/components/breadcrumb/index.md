## Breadcrumb 面包屑

Breadcrumb 面包屑

:::demo 
```html
<template>
    <breadcrumb-base></breadcrumb-base>
</template>
<script>

import breadcrumbBase from './breadcrumb-base.md';

export default {
  data(){
    return {
    }
  },
  components:{
    breadcrumbBase,
  }
}
</script>
```
:::



#### API

**breadcrumb props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | - | / |


**breadcrumbItem props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | 要跳转到的url | string | - | - |

