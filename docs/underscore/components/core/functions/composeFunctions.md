#### compose

_.compose(*functions) 

从右向左执行，上一个函数执行的结果作为本次执行的参数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let greet = function(name){ return "hi: " + name; },
        exclaim = function(statement){ return statement.toUpperCase() + "!"; },
        welcome = _.compose(greet, exclaim);
      
      console.log(welcome('moe'));
    }
  }
}
</script>
```
:::
