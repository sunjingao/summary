#### keys

_.keys(object) 

将自身属性（非继承）返回。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.keys({one: 1, two: 2, three: 3});
      console.log(res);
    }
  }
}
</script>
```
:::
