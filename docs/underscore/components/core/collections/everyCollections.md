#### every

_.every(list, [predicate], [context])

遍历list，如果predicate的返回值均为真，则返回true，否则返回false。list的length为0时也返回false。

predicate的参数是list的元素、list的元素的索引、list。作用域是context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.every([2, 4, 5], function(num) { return num % 2 === 0; }),
       res2 = _.every([2, 4, 5], function(num) { return num % 2 >= 0; });
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
