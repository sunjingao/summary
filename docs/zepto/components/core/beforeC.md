#### before

before(content) 

在匹配每个元素的前面插入内容（注：外部插入）。内容可以为html字符串，dom节点，或者节点组成的数组。

:::demo 基本用法
```html
<template>
    <div class="beforeC">beforeC dom</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.beforeC').before('<p>insert before</p>')
    }
  }
}
</script>
```
:::
