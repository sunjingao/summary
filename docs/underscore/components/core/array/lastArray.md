#### last

_.last(array, [n]) 

返回最后n个元素。n默认为1。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.last([5, 4, 3, 2, 1]),
        res2 = _.last([5, 4, 3, 2, 1], 2);
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
