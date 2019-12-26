#### without

_.without(array, *values) 

返回一个删除所有values值后的 array副本。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.without([1, 2, 1, 0, 3, 1, 4], 0),
        res2 = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
