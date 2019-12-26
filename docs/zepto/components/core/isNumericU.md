#### $.isNumeric

$.isNumeric(value) 

判断是否是数字或字符串数字。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let val1 = 555,
        val2 = '555';
      
      console.log($.isNumeric(val1));
      console.log($.isNumeric(val2));
    }
  }
}
</script>
```
:::
