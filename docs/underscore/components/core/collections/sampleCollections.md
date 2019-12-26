#### sample

_.sample(list, [n]) 

抽取n个随机值。不传入n时，返回一个随机样本。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.sample([1, 2, 3, 4, 5, 6]),
        res2 = _.sample([1, 2, 3, 4, 5, 6], 3);
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
