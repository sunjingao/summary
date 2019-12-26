#### parents

parent([selector])  

获取对象集合每个元素所有的祖先元素。如果css选择器参数给出，过滤出符合条件的元素。
如果想获取直接父级元素，使用 parent。如果只想获取到第一个符合css选择器的元素，使用closest。

:::demo 基本用法
```html
<template>

    <p>
        <span class="parentsC">Hello Again</span>
    </p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.parentsC').parents());
      console.log($('.parentsC').parents('p'));
    }
  }
}
</script>
```
:::
