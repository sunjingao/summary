#### identity

_.identity(value) 

将传入的value返回。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      let data = {name: 'moe'},
        res = _.identity(data);
      console.log(data === res);
    }
  }
}
</script>
```
:::
