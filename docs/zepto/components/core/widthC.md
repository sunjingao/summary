#### width

width() 
width(value)  
width(function(index, oldWidth){ ... })  

获取对象集合中第一个元素的宽；或者设置对象集合中所有元素的宽。

:::demo 基本用法
```html
<template>

    <div class="widthC1">111</div>
    <div class="widthC2">111</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($('.widthC1').width()); 
      console.log($(document).width()); 
      
      $('.widthC2').width(200)
    }
  }
}
</script>
<style scoped>
.widthC1 {
    border: 1px solid gray;
}

.widthC2 {
    border: 1px solid gray;
}
</style>
```
:::
