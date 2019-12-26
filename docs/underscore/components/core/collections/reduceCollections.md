#### reduce

_.reduce(list, iteratee, [memo], [context]) 

从左到右依次运算，本次执行的参数是上一次的结果，将最后的结果返回。

memo是初始值，如果没有，则会将list的第一个值作为参数传入，并从第二个值开始遍历执行。

iteratee的参数是 上次的结果、当前遍历项的值、当前遍历项的索引，作用域为context或list。


:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
      console.log(sum);
    }
  }
}
</script>
```
:::
