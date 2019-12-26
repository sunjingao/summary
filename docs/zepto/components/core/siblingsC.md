#### siblings

siblings([selector]) 

获取对象集合中所有元素的兄弟节点。如果给定CSS选择器参数，过滤出符合选择器的元素。

:::demo 基本用法
```html
<template>

    <p>Hello</p>
    <div class="sibling"><span>Hello Again</span></div>
    <p class="selected">And Again</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.sibling').siblings());
      console.log($('.sibling').siblings('.selected'));
    }
  }
}
</script>
```
:::
