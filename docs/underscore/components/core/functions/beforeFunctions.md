#### before

_.before(count, function) 

function只执行count次。

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
      
      let initialize = _.before(2, test);
      initialize();
      initialize();
      initialize();
    }
  }
}
</script>
```
:::
