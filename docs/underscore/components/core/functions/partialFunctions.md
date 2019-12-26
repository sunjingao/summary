#### partial

_.partial(function, *arguments) 

可以先使用闭包保存函数和一部分变量，使用时再传入另外一部分变量，最后把变量一起传给的函数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let subtract = function(a, b) { return b - a; },
      sub5 = _.partial(subtract, 5);
      console.log(sub5(20));
    }
  }
}
</script>
```
:::
