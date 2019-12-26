#### indexOf

_.indexOf(array, value) 

返回value在array中的索引。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let index = _.indexOf([1, 2, 3], 2);
      console.log(index);
    }
  }
}
</script>
```
:::
