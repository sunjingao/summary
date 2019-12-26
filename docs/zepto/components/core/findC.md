#### find

find(selector)  
find(collection) 
find(element)

在当对象前集合内查找符合CSS选择器的每个元素的后代元素。

:::demo 基本用法
```html
<template>

    <p class="findC"><span>Hello</span>, how are you?<div>111</div></p>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $("p.findC").find("span")
      );
    }
  }
}
</script>
```
:::
