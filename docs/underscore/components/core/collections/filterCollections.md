#### filter

_.find(list, predicate, [context])

遍历list，当predicate返回值为真时，将list的值放入返回的数组中。全为假时返回空数组。

predicate的参数是 list的当前值、list的当前值的索引、list。作用域是context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      console.log(evens);
    }
  }
}
</script>
```
:::
