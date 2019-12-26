#### defaults

_.defaults(object, *defaults) 

用*defaults填充object中没有的属性。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let iceCream = {flavor: "chocolate"},
        res = _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
      console.log(res);
    }
  }
}
</script>
```
:::
