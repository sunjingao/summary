#### indexOf

index(element,[from
Index]) 

在当前对象集合中获取一个元素的索引值（注：从0开始计数）。
如果给定formindex参数，从该位置开始往后查找，返回基于0的索引值，如果没找到，则返回-1。

:::demo 基本用法
```html
<template>

    <div>
        <span class="indexOfC indexOfC1">indexOfC1</span>
        <span class="indexOfC indexOfC2">indexOfC2</span>
        <span class="indexOfC indexOfC3">indexOfC3</span>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $('.indexOfC').indexOf($('.indexOfC2').get(0))
      );
      console.log(
        $('.indexOfC').indexOf($('.indexOfC2').get(0), 2)
      );
    }
  }
}
</script>
```
:::
