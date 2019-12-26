#### reject

_.reject(list, predicate, [context]) 

遍历list，将predicate返回值为假的list元素放入数组中。

predicate的参数是 list的元素值、list的元素值的索引、list。作用域为context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
    
      let odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
      
      console.log(odds);
    }
  }
}
</script>
```
:::
