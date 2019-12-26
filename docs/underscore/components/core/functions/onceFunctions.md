#### once

_.once(function) 

代码仅执行一次。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let test = function() {
        console.log(111);
      };
      
      let initialize = _.once(test);
      initialize();
      initialize();
      initialize();
      initialize();
      initialize();
    }
  }
}
</script>
```
:::
