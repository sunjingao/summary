#### mapObject

_.mapObject(object, iteratee, [context]) 

改变对象的值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.mapObject({start: 5, end: 12}, function(val, key) {
        return val + 5;
      });
      console.log(res);
    }
  }
}
</script>
```
:::
