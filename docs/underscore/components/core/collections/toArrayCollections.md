#### toArray

_.toArray(list) 

将list转为数组。值为元素的值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.toArray([11, 22, 33, 44, 55]),
        res2 = _.toArray({val1:11, val2:22, val3:33, val4:44, val5:55});
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
