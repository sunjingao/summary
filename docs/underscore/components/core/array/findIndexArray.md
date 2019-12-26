#### findIndex

_.findIndex(array, predicate, [context]) 

遍历数组，当predicate返回为真时，返回元素的索引值；都为假时返回-1。

predicate参数为元素、索引，array，作用域为context或array。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.findIndex([4, 6, 8, 12], item => item===8);
      console.log(res);
    }
  }
}
</script>
```
:::
