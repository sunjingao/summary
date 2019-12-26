#### hasClass

hasClass(name) 

检查对象集合中是否有元素含有指定的class。

:::demo 基本用法
```html
<template>

    <ul>
        <li class="hasClass">list item 1</li>
        <li class="hasClass yaotaiyang">list item 2</li>
        <li class="hasClass">list item 3</li>
    </ul>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $('.hasClass').hasClass("yaotaiyang")
      );
    }
  }
}
</script>
```
:::
