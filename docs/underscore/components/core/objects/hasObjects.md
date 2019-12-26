#### has

_.has(object, key) 

判断object是否有key属性，不考虑原型链。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.has({a: 1, b: 2, c: 3}, "b");
      console.log(res);
    }
  }
}
</script>
```
:::
