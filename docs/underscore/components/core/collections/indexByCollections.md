#### indexBy

.indexBy(list, iteratee, [context]) 

将iteratee为函数时，将函数返回的结果作为索引，元素作为值，组成新的对象。参数为元素、元素索引、list，作用域为context或list。
否则，将元素的iteratee值作为索引，元素作为值，组成一个对象。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}],
       res = _.indexBy(stooges, 'age');
      
      console.log(res);
    }
  }
}
</script>
```
:::
