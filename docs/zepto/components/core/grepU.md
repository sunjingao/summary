#### $.grep

$.grep(items, function(item){ ... })

将过滤条件为真的内容过滤出来。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = $.grep([1,2,3],function(item){
        return item > 1
      });
      console.log(res);
    }
  }
}
</script>
```
:::
