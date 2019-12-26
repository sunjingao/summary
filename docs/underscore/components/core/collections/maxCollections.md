#### max

_.max(list, [iteratee], [context]) 

当iteratee为函数时，对list中的元素进行操作，比较返回值，返回最大值对应的元素。函数的作用域为context。
否则，将list中的元素进行比较，返回最大值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      let res = _.max(stooges, function(stooge){ return stooge.age; });
      console.log(res);
    }
  }
}
</script>
```
:::
