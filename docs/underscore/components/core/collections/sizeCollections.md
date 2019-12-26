#### size

_.size(list) 

返回list的长度。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.size([1, 2, 3, 4, 5]),
        res2 = _.size({one: 1, two: 2, three: 3});
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
