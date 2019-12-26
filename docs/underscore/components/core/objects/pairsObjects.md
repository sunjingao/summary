#### pairs

_.pairs(object) 

将对象的键值对放到数组中。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.pairs({one: 1, two: 2, three: 3});
      console.log(res);
    }
  }
}
</script>
```
:::
