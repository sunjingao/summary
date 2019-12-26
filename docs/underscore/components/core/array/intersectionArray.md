#### intersection

_.intersection(*arrays) 

返回每个数组中都存在的值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
      console.log(res);
    }
  }
}
</script>
```
:::
