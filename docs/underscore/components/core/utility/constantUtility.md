#### constant

_.constant(value) 

闭包函数，返回一个函数，执行这个函数返回value值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooge = {name: 'moe'};
      console.log(stooge === _.constant(stooge)());
    }
  }
}
</script>
```
:::
