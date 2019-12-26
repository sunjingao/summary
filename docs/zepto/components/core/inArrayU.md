#### $.inArray

$.inArray(element, array, [fromIndex]) 

返回数组中指定元素的索引值（注：以0为基数），如果没有找到该元素则返回-1。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($.inArray("abc",["bcd","abc","edf","aaa"]));
      console.log($.inArray("abc",["bcd","abc","edf","abc"],2));
      console.log($.inArray("abc",["bcd","abc","edf","aaa"],2));
    }
  }
}
</script>
```
:::
