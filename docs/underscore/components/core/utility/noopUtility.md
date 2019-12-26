#### noop

_.noop() 

不做任何操作，返回undefined，可用做默认的回调函数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.noop();
      console.log(res);
    }
  }
}
</script>
```
:::
