#### offset

offset()   ⇒ object
offset(coordinates)  
offset(function(index, oldOffset){ ... }) 

获得当前元素相对于document的位置。返回一个对象含有： top, left, width和height

当给定一个含有left和top属性对象时，使用这些值来对集合中每一个元素进行相对于document的定位。

:::demo 基本用法
```html
<template>

    <p class="offsetC1">Hello</p>
    <p class="offsetC2">2nd Paragraph</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let p = $(".offsetC2"),
      offset = p.offset();
      p.html( "left: " + offset.left + ", top: " + offset.top );
    }
  }
}
</script>
```
:::
