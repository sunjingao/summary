#### $.noop

$.noop

返回一个空函数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($.noop);
    }
  }
}
</script>
```
:::
