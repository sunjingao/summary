#### next

next()
next(selector) 

获取对象集合中每一个元素的下一个兄弟节点(可以选择性的带上过滤选择器)。

:::demo 基本用法
```html
<template>

    <p class="nextC">Hello</p>
    <p class="nextC">Hello Again</p>
    <p class="nextC selected">Hello Select</p>
    <div><span>And Again</span></div>
    
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($(".nextC").next());
      console.log($(".nextC").next('.selected'));
    }
  }
}
</script>
```
:::
