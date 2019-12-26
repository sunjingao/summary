#### escape

_.escape(string) 

转义HTML字符串，替换&, <, >, ", ', 和 /字符。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.escape('Curly, Larry & Moe');
      console.log(res);
    }
  }
}
</script>
```
:::
