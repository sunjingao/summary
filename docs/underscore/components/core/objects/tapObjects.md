#### tap

_.tap(object, interceptor) 

执行interceptor函数，object作为参数。返回object对象。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
     let res =  _.chain([1,2,3,200])
        .filter(function(num) { return num % 2 === 0; })
        .tap(console.log)
        .map(function(num) { return num * num })
        .value();
     
      console.log(res);
    }
  }
}
</script>
```
:::
