#### clone

clone()

复制集合中的dom元素。对这些dom元素操作不会影响原dom。

:::demo 基本用法
```html
<template>
    <div class="cloneC">
        <div class="clone1">111</div>
    </div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.cloneC').append($('.clone1').clone());
    }
  }
}
</script>
```
:::
