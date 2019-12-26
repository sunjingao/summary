#### pluck

_.pluck(list, propertyName) 

遍历list，提取propertyName属性的值。

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
      let res = _.pluck(stooges, 'name');
      
      console.log(res);
    }
  }
}
</script>
```
:::
