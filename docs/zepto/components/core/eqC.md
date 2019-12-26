#### eq

eq(index) 

从当前对象集合中获取给定索引值（注：以0为基数）的元素。

:::demo 基本用法
```html
<template>

    <div class="eqC eqC1">eqC1</div>
    <div class="eqC eqC2">eqC2</div>
    <div class="eqC eqC3">eqC3</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.eqC').eq(1));
      console.log($('.eqC').eq(-1));
    }
  }
}
</script>
```
:::
