#### $.isFunction

$.isFunction(object) 

判断object是否为函数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let val = function() {};
      console.log($.isFunction(val));
    }
  }
}
</script>
```
:::
