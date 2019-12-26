#### contains

_.contains(list, value, [fromIndex])

从fromIndex处开始遍历list， 如果元素包含value时，返回true。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.contains([11, 22, 33, 44, 55], 22),
       res2 = _.contains([11, 22, 33, 44, 55], 22, 2);
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
