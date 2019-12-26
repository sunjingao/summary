#### last

last()

获取对象集合中最后一个元素。

:::demo 基本用法
```html
<template>

    <ul>
        <li class="lastC">list item 1</li>
        <li class="lastC">list item 2</li>
        <li class="lastC">list item 3</li>
        <li class="lastC">list item 4</li>
        <li class="lastC">list item 5</li>
    </ul>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.lastC').last());
    }
  }
}
</script>
```
:::
