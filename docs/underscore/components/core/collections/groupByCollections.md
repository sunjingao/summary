#### groupBy

_.groupBy(list, iteratee, [context]) 

对list进行分组。

当iteratee为函数时，通过返回值对元素进行分组。参数为元素、元素索引、list。作用域为context或list。
否则，iteratee作为元素的属性，通过元素的属性值对元素进行分组。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }),
        res2 = _.groupBy(['one', 'two', 'three', 'four'], 'length');
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
