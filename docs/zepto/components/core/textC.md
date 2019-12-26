#### text

text() 
text(content)
text(function(index, oldText){ ... }) 

获取或者设置所有对象集合中元素的文本内容。
当没有给定content参数时，返回当前对象集合中第一个元素的文本内容（包含子节点中的文本内容）。
当给定content参数时，使用它替换对象集合中所有元素的文本内容。它有待点似 html，与它不同的是它不能用来获取或设置 HTML。

:::demo 基本用法
```html
<template>

    <p class="textC1">111</p>
    <p class="textC2">222</p>
    <p class="textC3">333</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($('.textC1').text());
      $('.textC2').text('this is textC');
      $('.textC3').text(function(index, oldText) {
        return 'replace'; 
      });
    }
  }
}
</script>
```
:::
