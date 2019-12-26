#### iteratee

_.iteratee(value, [context]) 

根据不同的值返回不同的类型。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      // No value
      _.iteratee();
      console.log(_.iteratee());
      
      // Function
      _.iteratee(function(n) { return n * 2; });
      console.log(function(n) { return n * 2; });
      
      // Object
      _.iteratee({firstName: 'Chelsea'});
      console.log(_.matcher({firstName: 'Chelsea'}));
      
      // Anything else
      _.iteratee('firstName');
      console.log(_.property('firstName'));
    }
  }
}
</script>
```
:::
