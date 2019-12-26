#### $.trim

$.trim(string)

删除字符串首位的空格。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let str = "  abcd e  ",
        res = $.trim(str);
      console.log(res);
      console.log(res.length);
    }
  }
}
</script>
```
:::
