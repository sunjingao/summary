#### object

_.object(list, [values]) 

当参数仅有一个值时，数组中的每一项的第一个值将作为索引，第二个值将作为值。当参数有两个值时，对应位置的第一个值为索引，第二个值为值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.object(['moe', 'larry', 'curly'], [30, 40, 50]),
        res2 = _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
