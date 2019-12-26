#### contents

contents()

获得每个匹配元素集合元素的子元素，包括文字和注释节点。
注：.contents()和.children()方法类似，只不过前者包括文本节点以及$对象中产生的HTML元素。

:::demo 基本用法
```html
<template>
    <div class="contentsC">
        contentsC1
        <div class="contentsC1">contentsC2</div>
    </div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.contentsC').contents());
    }
  }
}
</script>
```
:::
