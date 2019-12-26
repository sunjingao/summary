#### sortedIndex

_.sortedIndex(array, value, [iteratee], [context]) 

要求array是排序好的内容，可以返回value在array上的位置。

iteratee为空时表示直接用元素进行比较；为属性时，取元素的属性进行排序；为方法时，取方法的返回值进行比较。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.sortedIndex([10, 20, 30, 40, 50], 35);
      let stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}],
        res2 = _.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
