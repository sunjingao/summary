#### zip

_.zip(*arrays) 

将arrays中的数组中的相同位置的元素放在同一个数组中。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
      console.log(res);
    }
  }
}
</script>
```
:::
