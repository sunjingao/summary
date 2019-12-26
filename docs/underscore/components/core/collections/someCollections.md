#### some

_.some(list, [predicate], [context]) 

存在predicate时遍历list，如果predicate的返回值为真时则返回true，全为假时返回false。
不存在predicate时，当list属性为真时及返回true，全为假时返回false。

predicate的参数是 list的当前值、list的当前值的索引、list。作用域是context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      let res = _.some([null, 0, 'yes', false]);
      console.log(res);
    }
  }
}
</script>
```
:::
