#### sortBy

_.sortBy(list, iteratee, [context]) 

对list进行排序。

当iteratee为函数时，通过返回值对元素进行排序。参数为元素、元素索引、list。作用域为context或list。
否则，iteratee作为元素的属性，通过元素的属性值对元素进行排序。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 70}, {name: 'curly', age: 60}];
      
      let res1 = _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); }),
       res2 = _.sortBy(stooges, 'age');
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
