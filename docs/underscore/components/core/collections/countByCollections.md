#### countBy

_.countBy(list, iteratee, [context]) 

当iteratee为函数时，函数执行后的结果作为索引，值为结果是相同内容的个数。参数为元素、索引、list。作用域为context或list。
否则，元素的iteratee属性作为索引，值为相同索引的个数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.countBy([1, 2, 3, 4, 5], function(num) {
         return num % 2 === 0 ? 'even': 'odd';
      });
      console.log(res);
    }
  }
}
</script>
```
:::
