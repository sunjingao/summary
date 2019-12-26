#### unzip

_.unzip(array) 

与zip的区别是，把所有参数变成了一个数组。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
      console.log(res);
    }
  }
}
</script>
```
:::
