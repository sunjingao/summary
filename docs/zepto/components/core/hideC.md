#### hide

hide() 

通过设置css的属性display 为 none来将对象集合中的元素隐藏。

:::demo 基本用法
```html
<template>

    <div class="hideC">this is hideC</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.hideC').hide();
    }
  }
}
</script>
```
:::
