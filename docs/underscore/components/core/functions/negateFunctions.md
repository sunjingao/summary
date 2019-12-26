#### negate

_.negate(predicate) 

对predicate的返回值取反。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      function isEven(n) {
        return n % 2 === 0;
      }
      
      console.log(_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven)));
    }
  }
}
</script>
```
:::
