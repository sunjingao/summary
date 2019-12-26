#### functions

_.functions(object) 

将object的函数名返回。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let obj = {
        aa:function() {},
        bb:11
      },
       res = _.functions(obj);
      
      console.log(res);
    }
  }
}
</script>
```
:::
