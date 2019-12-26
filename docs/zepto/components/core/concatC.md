#### concat

concat(nodes, [node2, ...])

添加元素到一个Zepto对象集合形成一个新数组。如果参数是一个数组，那么这个数组中的元素将会合并到Zepto对象集合中。

:::demo 基本用法
```html
<template>
    <div class="concatC">
        <div class="concat1">concat1</div>
        <div class="concat2">concat2</div>
    </div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $('.concat1').concat($('.concat2'))
      );
    }
  }
}
</script>
```
:::
