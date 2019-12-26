#### rest

_.rest(array, [n]) 

返回从第n个元素起的所有元素，n默认为1。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      var res1 = _.rest([5, 4, 3, 2, 1]),
        res2 = _.rest([5, 4, 3, 2, 1], 2);
        
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
