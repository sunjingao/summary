#### wrap

wrap(structure)   ⇒ self
wrap(function(index){ ... })  

在每个匹配的元素外层包上一个html元素。
structure参数可以是一个单独的元素或者一些嵌套的元素。
也可以是一个html字符串片段或者dom节点。还可以是一个生成用来包元素的回调函数，这个函数返回前两种类型的包裹片段。


:::demo 基本用法
```html
<template>

    <div class="wrapC">
      <div class="wrapC1">Hello</div>
      <div class="wrapC1">Goodbye</div>
    </div>
    
    <div class="wrapC">
      <div class="wrapC2">Hello</div>
      <div class="wrapC2">Goodbye</div>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $(".wrapC1").wrap("<b class='wrap'></b>");
      
      $('.wrapC2').wrap(function() {
        return '<b></b>';
      });
    }
  }
}
</script>
<style scoped>
.wrapC {
    width: 300px;
    border: 1px solid gray;
}
</style>
```
:::
