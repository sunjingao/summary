#### wrapInner

wrapInner(structure)   
wrapInner(function(index){ ... }) 

将每个元素中的内容包裹在一个单独的结构中。
结构可以是单个元件或多个嵌套元件，并且可以通过在作为HTML字符串或DOM节点，或者是一个生成用来包元素的回调函数，这个函数返回前两种类型的包裹片段。

:::demo 基本用法
```html
<template>

    <div class="wrapInnerC">
        <span>1111</span>
        <span>2222</span>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $(".wrapInnerC").wrapInner("<b></b>");
    }
  }
}
</script>
```
:::
