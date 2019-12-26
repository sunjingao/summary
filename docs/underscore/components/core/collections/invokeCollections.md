#### invoke

_.invoke(list, methodName, *arguments) 

遍历list。当methodName为函数时，执行此函数；如果为字符串，则执行属性的methodName方法。将arguments传给执行的方法。将执行的结果返回。

执行方法的作用域为list的属性。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      let res = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
      console.log(res);
    }
  }
}
</script>
```
:::
