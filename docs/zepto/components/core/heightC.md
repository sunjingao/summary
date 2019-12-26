#### height

height()  
height(value)  
height(function(index, oldHeight){ ... })

获取对象集合中第一个元素的高度；或者设置对象集合中所有元素的高度。

:::demo 基本用法
```html
<template>

    <div id="heightC1"></div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($('#heightC1').height()); 
      console.log($(document).height()); 
    }
  }
}
</script>
```
:::
