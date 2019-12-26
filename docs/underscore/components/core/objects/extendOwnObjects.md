#### extendOwn

_.extendOwn(destination, *sources) 

将*sources对象的键值对赋值到destination对象中,不包括继承的属性。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let source = {age: 50};
      source.__proto__ = {bb:66};
      
      let res = _.extendOwn({name: 'moe'}, source);
      console.log(res);
    }
  }
}
</script>
```
:::
