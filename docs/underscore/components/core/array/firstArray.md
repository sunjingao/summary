#### first

_.first(array, [n]) 

返回从第n个元素起的第一个元素。n默认为0。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.first([5, 4, 3, 2, 1]),
        res2 = _.first([5, 4, 3, 2, 1], 2);
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
