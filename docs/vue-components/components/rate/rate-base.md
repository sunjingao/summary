#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
   <v-rate @rateSelectChange="rateSelectChange"></v-rate>
</template>
<script>
export default {
  methods:{
    rateSelectChange(val) {
      console.log('当前内容：' + val);
    },
  }
}
</script>
```
:::


