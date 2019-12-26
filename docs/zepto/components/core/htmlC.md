#### html

html() 
html(content)
html(function(index, oldHtml){ ... }) 

获取或设置对象集合中元素的HTML内容。
当没有给定content参数时，返回对象集合中第一个元素的innerHtml。
当给定content参数时，用其替换对象集合中每个元素的内容。content可以是append中描述的所有类型。

:::demo 基本用法
```html
<template>
    <div class="htmlC1">this is htmlC1</div>
    <div class="htmlC2">this is htmlC2</div>
    <div class="htmlC3">this is htmlC3</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log(
        $('.htmlC1').html()
      );
      
      $('.htmlC2').html("Hello <b>world</b>!");
      
      $('.htmlC3').html(function(idx, oldHtml){
        return '<span>111</span>'
      })
    }
  }
}
</script>
```
:::
