#### wrap

_.wrap(function, wrapper) 

wrapper的参数是第一个function。可以组合两个函数的执行顺序等操作。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let hello = function(name) { return "hello: " + name; };
      hello = _.wrap(hello, function(func) {
         return "before, " + func("moe") + ", after";
      });
      console.log(hello());
    }
  }
}
</script>
```
:::
