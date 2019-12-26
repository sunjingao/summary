#### value

_.chain(obj).value() 

返回最终值，即_wrapped。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.chain([1, 2, 3]).filter(item=>item>=2).value();
      console.log(res1);
    }
  }
}
</script>
```
:::
