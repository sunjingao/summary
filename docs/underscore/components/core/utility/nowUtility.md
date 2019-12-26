#### now

.now() 

返回当前时间戳。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(_.now());
    }
  }
}
</script>
```
:::
