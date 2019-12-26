#### $.type

$.type(object) 

判断object的类型，可能为undefined、number、boolean、string、function、symbol、null、array、date、regexp、error、object。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($.type(null));
      console.log($.type(/11/));
    }
  }
}
</script>
```
:::
