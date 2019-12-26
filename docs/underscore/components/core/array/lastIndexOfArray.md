#### lastIndexOf

_.lastIndexOf(array, value) 

从后向前搜索，返回第一个出现的value的索引。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
      console.log(res);
    }
  }
}
</script>
```
:::
