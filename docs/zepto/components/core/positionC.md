#### position

position() 

获取对象集合中第一个元素的位置。相对于 offsetParent。当绝对定位的一个元素靠近另一个元素的时候，这个方法是有用的。

:::demo 基本用法
```html
<template>

    <p class="positionC1">Hello</p>
    <p class="positionC2">2nd Paragraph</p>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let position = $('.positionC1').position();
      $('.positionC2').html( "left: " + position.left + ", top: " + position.top );
    }
  }
}
</script>
```
:::
