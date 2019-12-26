#### wrapAll

wrapAll(structure) 

在所有匹配元素外面包一个单独的结构。结构可以是单个元素或 几个嵌套的元素，并且可以通过在作为HTML字符串或DOM节点。

:::demo 基本用法
```html
<template>

    <div class="wrapAll">wrapAll1</div>
    <div class="wrapAll">wrapAll2</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($(".wrapAll").wrapAll("<b class=wrapAll></b>"));
    }
  }
}
</script>
```
:::
