#### add

add(selector, [context]) 

添加查找到的元素到当前的数据集合中。

如果给定context，则在context元素中进行查找。

:::demo 基本用法
```html
<template>
    <ul>
        <li class="addCLi">list item 1</li>
        <li class="addCLi">list item 2</li>
        <li class="addCLi">list item 3</li>
    </ul>
    <p class="addCP">a paragraph</p>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.addCLi').add('.addCP').css('background-color', 'red'));
    }
  }
}
</script>
```
:::
