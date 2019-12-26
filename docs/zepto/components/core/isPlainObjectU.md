#### $.isPlainObject

$.isPlainObject(object) 

判断是否是对象（不包括数组和null）。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($.isPlainObject({}));       // => true
      console.log($.isPlainObject(new Object)); // => true
      console.log($.isPlainObject(new Date));   // => false
    }
  }
}
</script>
```
:::
