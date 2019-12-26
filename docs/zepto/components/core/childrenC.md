#### children

children([selector]) 

获得每个匹配元素集合元素的直接子元素，如果给定selector，那么返回的结果中只包含符合css选择器的元素。

:::demo 基本用法
```html
<template>
    <div class="childrenC"><span>children dom</span></div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($('.childrenC').children());
    }
  }
}
</script>
```
:::
