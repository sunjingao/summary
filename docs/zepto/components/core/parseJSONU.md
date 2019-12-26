#### $.parseJSON

$.parseJSON(string)

将json字符串转为json对象。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let jsonStrify = "{\"aa\":11,\"bb\":22}";
      console.log($.parseJSON(jsonStrify));
    }
  }
}
</script>
```
:::
