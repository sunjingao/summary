#### forEach

forEach(function(item, index, array){ ... }, [context])  

遍历对象集合中每个元素，有点类似 each，但是遍历函数的参数不一样，当函数返回 false 的时候，遍历不会停止。

:::demo 基本用法
```html
<template>

    <ul>
        <li class="forEachC">list item 1</li>
        <li class="forEachC">list item 2</li>
        <li class="forEachC">list item 3</li>
        <li class="forEachC">list item 4</li>
        <li class="forEachC">list item 5</li>
    </ul>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('li.forEachC').forEach(
        function(item, index, array){
          console.log(item, index, array)
        }
      )
    }
  }
}
</script>
```
:::
