#### result

_.result(object, property, [defaultValue]) 

object[property]是一个函数时，作用域为object，执行这个函数。
object有property属性时,返回属性值。
defaultValue为函数时，作用域为object，执行defaultValue。
其它情况，返回 defaultValue。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
       // => "crumpets"
      console.log(_.result(object, 'cheese'));
      // => "nonsense"
      console.log(_.result(object, 'stuff'));
      // => "ham"
     console.log( _.result(object, 'meat', 'ham'));
    }
  }
}
</script>
```
:::
