#### prev

prev()
prev(selector)

获取对象集合中每一个元素的前一个兄弟节点，通过选择器来进行过滤。

:::demo 基本用法
```html
<template>

    <p class="prevC selected">Hello</p>
    <div class="prevC"><span>Hello Again</span></div>
    <p class="prevC">And Again</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.prevC').prev());
      console.log($('.prevC').prev('.selected'));
    }
  }
}
</script>
```
:::
