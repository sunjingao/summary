#### show

show() 

恢复对象集合中每个元素默认的“display”值。
如果你用 hide将元素隐藏，用该属性可以将其显示。相当于去掉了display：none。

:::demo 基本用法
```html
<template>

    <p style="display: none" class="showC">Hello</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $('.showC').show();
    }
  }
}
</script>
```
:::
