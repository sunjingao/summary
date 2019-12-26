#### is

is(selector)

判断当前元素集合中的第一个元素是否符css选择器。

:::demo 基本用法
```html
<template>

    <form><input type="checkbox" class="isCCheckbox" /></form>
    
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($(".isCCheckbox").parent().is("form"));
    }
  }
}
</script>
```
:::
