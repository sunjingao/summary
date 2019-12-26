#### $.isArray

$.isArray(object)

判断object是否为数组。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let val = [11, 22, 33];
      console.log($.isArray(val));
    }
  }
}
</script>
```
:::
