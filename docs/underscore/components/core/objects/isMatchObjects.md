#### isMatch

_.isMatch(object, properties) 

object中是否完全包含properties的键值对。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooge = {name: 'moe', age: 32, aa:111};
      console.log(_.isMatch(stooge, {age: 32, aa:111}));
    }
  }
}
</script>
```
:::
