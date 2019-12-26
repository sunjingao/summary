#### where

_.where(list, properties) 

遍历list，将包含properties键值对的list中的元素放入返回的数组中。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let obj = [{aa:11}, {aa:11, author: "Shakespeare", year: 1611}, {aa:22, author: "Shakespeare", year: 1611}],
       res = _.where(obj, {author: "Shakespeare", year: 1611});
      
      console.log(res);
    }
  }
}
</script>
```
:::
