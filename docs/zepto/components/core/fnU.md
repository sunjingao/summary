#### $.fn

原型链上赋值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $.fn(
        'con', 
        function(){
            console.log(111);
        }
      );
      
      $('div').con();
    }
  }
}
</script>
```
:::
