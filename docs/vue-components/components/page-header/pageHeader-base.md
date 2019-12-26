#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
    <v-page-header @back="goBack" content="详情页面"></v-page-header>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    goBack(){
      console.log('click back');
    },
  }
}
</script>
```
:::


