#### bind

_.bind(function, object, *arguments) 

绑定函数的作用域。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let func = function(greeting1, greeting2){ return greeting1 + ',' + greeting2 + ': ' + this.name };
      func = _.bind(func, {name: 'moe'}, 'hi');
      
      console.log(func('ha'));
    }
  }
}
</script>
```
:::
