#### isEqual

_.isEqual(object, other) 

判断两个内容是否相等，可以判断数组或对象的内容。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooge = {name: 'moe', luckyNumbers: [13, 27, 34]},
        clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
      
      console.log(stooge === clone);
      console.log(_.isEqual(stooge, clone));
    }
  }
}
</script>
```
:::
