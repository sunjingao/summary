#### empty

empty()

清空对象集合中每个元素的DOM内容。

:::demo 基本用法
```html
<template>
    <div class="emptyC">need to be empty</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.emptyC').empty();
    }
  }
}
</script>
```
:::
