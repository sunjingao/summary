#### has

has(selector)
has(node) 

判断当前对象集合的子元素是否有符合选择器的元素，或者是否包含指定的DOM节点。
如果有，则返回新的对象集合，该对象过滤掉不含有选择器匹配元素或者不含有指定DOM节点的对象。

:::demo 基本用法
```html
<template>

    <ul>
      <li class="hasC">list item 1</li>
      <li class="hasC">list item 2
        <ul>
          <li class="hasC">list item 2-a</li>
          <li class="hasC">list item 2-b</li>
        </ul>
      </li>
      <li class="hasC">list item 3</li>
      <li class="hasC">list item 4</li>
    </ul>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $('li.hasC').has('ul').css('background-color', 'red')
      );
    }
  }
}
</script>
```
:::
