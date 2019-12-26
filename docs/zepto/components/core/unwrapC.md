#### unwrap

unwrap()  

移除集合中每个元素的直接父节点，并把他们的子元素保留在原来的位置。 
基本上，这种方法删除上一的祖先元素，同时保持DOM中的当前元素。

:::demo 基本用法
```html
<template>

    <div class="bold">
        <p class="unwrapC">Hello</p>
        <p class="unwrapC">cruel</p>
        <p class="unwrapC">World</p>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $(".unwrapC").unwrap()
    }
  }
}
</script>
```
:::
