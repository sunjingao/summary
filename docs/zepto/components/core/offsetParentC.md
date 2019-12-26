#### offsetParent

offsetParent()  

找到第一个定位过的祖先元素，意味着它的css中的position 属性值为“relative”,“absolute” or “fixed”。

:::demo 基本用法
```html
<template>

    <div class="offsetParent1" style="position: relative;">
        <div class="offsetParent2">
            <div class="offsetParent3"></div>
        </div>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.offsetParent3').offsetParent());
    }
  }
}
</script>
```
:::
