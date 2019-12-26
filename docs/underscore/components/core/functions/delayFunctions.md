#### delay

_.delay(function, wait, *arguments) 

延时wait毫秒再执行function，并把arguments作为参数传给function。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let log = _.bind(console.log, console);
      _.delay(log, 1000, 'logged later');
    }
  }
}
</script>
```
:::
