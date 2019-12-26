#### $.isWindow

$.isWindow(object) 

判断是否是window对象。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($.isWindow(window));
    }
  }
}
</script>
```
:::
