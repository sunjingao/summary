#### shuffle

_.shuffle(list) 

list随机组合。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.shuffle([1, 2, 3, 4, 5, 6]);
      console.log(res);
    }
  }
}
</script>
```
:::
