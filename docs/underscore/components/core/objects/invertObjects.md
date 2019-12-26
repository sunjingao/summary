#### invert

_.invert(object) 

将键值对交换。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
      console.log(res);
    }
  }
}
</script>
```
:::
