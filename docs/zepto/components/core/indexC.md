#### index

index([element]) 

获取一个元素的索引值（注：从0开始计数）。
当elemen参数没有给出时，返回当前元素在兄弟节点中的位置。当element参数给出时，返回它在当前对象集合中的位置。如果没有找到该元素，则返回-1。

:::demo 基本用法
```html
<template>

    <ul class="indexC">
      <li id="foo" class="indexCLi">foo</li>
      <li id="bar" class="indexCLi">bar</li>
      <li id="baz" class="indexCLi">baz</li>
    </ul>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($('.indexCLi').index(document.getElementById('bar'))); //1，传递一个DOM对象，返回这个对象在原先集合中的索引位置
      console.log($('.indexCLi').index($('#bar'))); //1，传递一个jQuery对象
      console.log($('.indexCLi').index('#foo')); //1，传递一个选择器，返回#bar在所有li中的索引位置
      console.log($('#bar').index()); //1，不传递参数，返回这个元素在同辈中的索引位置。  
    }
  }
}
</script>
```
:::
