#### each

each(function(index, item){ ... }) 

遍历一个对象集合每个元素。在迭代函数中，this关键字指向当前项(作为函数的第二个参数传递)。如果迭代函数返回 false，遍历结束。

:::demo 基本用法
```html
<template>
    <div class="each each1">each1</div>
    <div class="each each2">each2</div>
    <div class="each each3">each3</div>
    <div class="each each4">each4</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.each').each(
        function (index, item) {
          console.log("index:",index,"item:",item,"this:",this);
        }
      )
    }
  }
}
</script>
```
:::
