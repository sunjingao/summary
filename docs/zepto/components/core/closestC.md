#### closest

closest(selector, [context])
closest(collection)
closest(element)

从元素本身开始，逐级向上级元素匹配，并返回最先匹配selector的元素。
如果给定context节点参数，那么只匹配该节点的后代元素。

:::demo 基本用法
```html
<template>

    <div class="closetC">
        <div class="closetC1">closetC1</div>
    </div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.closetC1').closest('.closetC'));
    }
  }
}
</script>
```
:::
