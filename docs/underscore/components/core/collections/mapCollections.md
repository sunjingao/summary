#### map

_.each(list, iteratee, [context]) 

对list中的每个元素调用iteratee方法，使用返回值构成一个数组。

iteratee的参数是list的元素、list的元素的索引、list。作用域是context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.map([1, 2, 3], function(num){ return num * 3; }),
       res2 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }),
       res3 = _.map([[1, 2], [3, 4]], _.first);

      console.log(res1);
      console.log(res2);
      console.log(res3);
    }
  }
}
</script>
```
:::
