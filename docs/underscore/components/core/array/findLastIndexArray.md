#### findLastIndex

从右向左遍历数组，当predicate返回为真时，返回元素的索引值；都为假时返回-1。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let users = [
        {'id': 1, 'name': 'Bob', 'last': 'Brown'},
        {'id': 2, 'name': 'Ted', 'last': 'White'},
        {'id': 3, 'name': 'Frank', 'last': 'James'},
        {'id': 4, 'name': 'Ted', 'last': 'Jones'}
      ],
      res = _.findLastIndex(users, item => item.name==='Ted');
      
      console.log(res);
    }
  }
}
</script>
```
:::
