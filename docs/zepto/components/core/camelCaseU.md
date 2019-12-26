#### $.camelCase

$.camelCase(string)

将包含-或_的字符串改为驼峰形式。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($.camelCase('hello-there')); 
      console.log($.camelCase('helloThere')); 
    }
  }
}
</script>
```
:::
