#### css

css(property)   ⇒ value
css(property, value)   
css({ property: value, property2: value2, ... })  

读取或设置DOM元素的css属性。
当value参数不存在的时候，返回对象集合中第一个元素的css属性。当value参数存在时，设置对象集合中每一个元素的对应css属性。

多个属性可以通过传递一个属性名组成的数组一次性获取。多个属性可以利用对象键值对的方式进行设置。

当value为空(空字符串，null 或 undefined)，那个css属性将会被移出。当value参数为一个无单位的数字，如果该css属性需要单位，“px”将会自动添加到该属性上。

:::demo 基本用法
```html
<template>

    <div class="cssC">this is cssC</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let elem = $('.cssC');
      console.log(elem.css('background-color'));      
      elem.css('background-color', '#369');  
      elem.css('background-color', '');  
      elem.css({ backgroundColor: '#8EE', fontSize: 28 });
    }
  }
}
</script>
<style scoped>
.cssC {
    width: 300px;
    background-color: red;
}
</style>
```
:::
