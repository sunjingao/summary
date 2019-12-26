#### partition

_.partition(list, predicate) 

函数返回值作为判断条件，符合条件的作为第一个元素，其它作为第二个元素。参数为元素、索引、list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.partition([0, 1, 2, 3, 4, 5], item => item % 2 !== 0);
      console.log(res);
    }
  }
}
</script>
```
:::
