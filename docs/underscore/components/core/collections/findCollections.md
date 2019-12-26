#### find

_.find(list, predicate, [context]) 

遍历list中的值，predicate函数返回值为真时停止遍历，返回list的当前值。list都没有找到时返回undefined。

predicate的参数是list的元素，list的元素的索引，list。作用域为context或list。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      console.log(even);
    }
  }
}
</script>
```
:::
