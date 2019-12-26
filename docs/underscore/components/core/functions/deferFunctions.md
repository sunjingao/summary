#### defer

_.defer(function, *arguments) 

放在当前事件队列的最后面。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      _.defer(function(){ console.log('deferred'); });
    }
  }
}
</script>
```
:::
