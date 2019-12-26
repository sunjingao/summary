#### toggle

toggle([setting])

显示或隐藏匹配元素。如果 setting为true，相当于show 法。如果setting为false。相当于 hide方法。

:::demo 基本用法
```html
<template>

    <div class="toggleC">111</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.toggleC').toggle();
    }
  }
}
</script>
```
:::
