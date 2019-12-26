#### random

_.random(min, max) 

返回min和max之间的随机数。如果只传入一个值，将返回0和这个数之间的随机数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.random(0, 100);
      
      console.log(res);
    }
  }
}
</script>
```
:::
