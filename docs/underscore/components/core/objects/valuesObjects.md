#### values

_.values(object) 

获取自身的属性值，不包括原型链中的。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(_.values({one: 1, two: 2, three: 3}));
    }
  }
}
</script>
```
:::
