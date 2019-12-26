#### after

_.after(count, function) 

执行了count次后，再执行function函数。

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
      
      let initialize = _.after(2, test);
      initialize();
      initialize();
      initialize();
    }
  }
}
</script>
```
:::
