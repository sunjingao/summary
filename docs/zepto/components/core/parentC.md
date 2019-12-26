#### parent

获取对象集合中每个元素的直接父元素。如果css选择器参数给出。过滤出符合条件的元素。

:::demo 基本用法
```html
<template>

    <div>
        <p class="parentCP">Hello</p>
        <p>Hello</p>
    </div>
    
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.parentCP').parent());
    }
  }
}
</script>
```
:::
