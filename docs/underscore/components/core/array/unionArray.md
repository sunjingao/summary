#### union

_.union(*arrays) 

合并各个数组，返回去重后的结果。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
      console.log(res);
    }
  }
}
</script>
```
:::
