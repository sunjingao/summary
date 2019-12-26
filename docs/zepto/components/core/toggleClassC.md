#### toggleClass

在匹配的元素集合中的每个元素上添加或删除一个或多个样式类。
如果class的名称存在则删除它，如果不存在，就添加它。
如果 setting的值为真，这个功能类似于 addClass，如果为假，这个功能类似与 removeClass。

:::demo 基本用法
```html
<template>

    <div class="toggleClassC">111</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $(".toggleClassC").toggleClass("tglClsSelected");
    }
  }
}
</script>
<style scoped>
.tglClsSelected {
    background-color: red;
}
</style>
```
:::
