#### replaceWith

replaceWith(content) 

用给定的内容替换所有匹配的元素。(包含元素本身)。content参数可以为 before中描述的类型。

:::demo 基本用法
```html
<template>

    <span class="replaceWith1">Hello</span>
    <span class="replaceWith1">cruel</span>
    <span class="replaceWith1">World</span>

    <div class="container">
      <div class="replaceWith2 first">Hello</div>
      <div class="replaceWith2 second">And</div>
      <div class="replaceWith2 third">Goodbye</div>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $(".replaceWith1").replaceWith("<b>Paragraph. </b>");
      
      $('.replaceWith2.third').replaceWith($('.replaceWith2.first'));
    }
  }
}
</script>
```
:::
