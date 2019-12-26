#### propertyOf

_.property 的反操作。 获取一个对象并返回一个函数，该函数将返回提供的属性的值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooge = {name: 'moe'},
        res = _.propertyOf(stooge)('name');
      
      console.log(res);
    }
  }
}
</script>
```
:::
