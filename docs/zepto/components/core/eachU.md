#### $.each

$.each(collection, function(index, item){ ... }) 

遍历collection。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $.each(['a', 'b', 'c'], function(index, item){
        console.log('item %d is: %s', index, item)
      });
    }
  }
}
</script>
```
:::
