#### each

_.each(list, iteratee, [context]) 

对list中的每个元素调用多少次iteratee。

iteratee的参数是list的元素、list的元素的索引、list。作用域是context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      _.each([1, 2, 3], console.log);
      _.each({one: 1, two: 2, three: 3}, console.log);
    }
  }
}
</script>
```
:::
