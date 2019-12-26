#### size

slice(start, [end]) 

size() 

获取对象集合中元素的数量。

:::demo 基本用法
```html
<template>

    <div class="sizeC">111</div>
    <div class="sizeC">222</div>
    <div class="sizeC">333</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.sizeC').size());
    }
  }
}
</script>
```
:::
