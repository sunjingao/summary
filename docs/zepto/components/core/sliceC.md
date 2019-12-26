#### slice

提取这个数组array的子集，从start开始，如果给定end，提取从从start开始到end结束的元素，但是不包含end位置的元素。

:::demo 基本用法
```html
<template>

    <p class="sliceC">Hello</p>
    <p class="sliceC">cruel</p>
    <p class="sliceC">World</p>
    
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($(".sliceC").slice(1, 2));
      console.log($(".sliceC").slice(1));
    }
  }
}
</script>
```
:::
