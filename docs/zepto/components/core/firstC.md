#### first

first()

获取当前对象集合中的第一个元素。

:::demo 基本用法
```html
<template>

    <ul>
        <li class="firstC">list item 1</li>
        <li class="firstC">list item 2</li>
        <li class="firstC">list item 3</li>
        <li class="firstC">list item 4</li>
        <li class="firstC">list item 5</li>
    </ul>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $('li.firstC').first()
      );
    }
  }
}
</script>
```
:::
