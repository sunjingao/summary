#### flatten

_.flatten(array, [shallow]) 

对数组降维，shallow为降维的层数。shallow默认为最大层数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.flatten([1, [2], [3, [[4]]]]),
        res2 = _.flatten([1, [2], [3, [[4]]]], 1),
        res3 = _.flatten([1, [2], [3, [[4]]]], 2),
        res4 = _.flatten([1, [2], [3, [[4]]],4,[5,[6]], 2], 2);
      
      console.log(res1);
      console.log(res2);
      console.log(res3);
      console.log(res4);
    }
  }
}
</script>
```
:::
