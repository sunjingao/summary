#### data

data(name) 
data(name, value)

读取或写入dom的 data-* 属性。行为有点像 attr ，但是属性名称前面加上data-。

“true”, “false”, and “null” 被转换为相应的类型；
数字值转换为实际的数字类型；
JSON值将会被解析，如果它是有效的JSON；
其它的一切作为字符串返回。

:::demo 基本用法
```html
<template>
    <div class="dataC">dataC</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($(".dataC").data("blah"));  // undefined
      $(".dataC").data("blah", "hello");  // blah设置为hello
      console.log($(".dataC").data("blah"));  // hello
      $(".dataC").data("blah", 86);  // 设置为86
      console.log($(".dataC").data("blah"));  //  86
      $(".dataC").data("blah","false");  // undefined
      console.log($(".dataC").data("blah"));  // undefined
      console.log(typeof $(".dataC").data("blah"));  // undefined
    }
  }
}
</script>
```
:::
