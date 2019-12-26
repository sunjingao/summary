#### range

_.range([start], stop, [step]) 

创建从start起，到stop结束，间隔为step的点的集合。step允许为负数，此时start应小于stop。

如果参数仅有一个值，代表从零开始，到参数值截止。否则，最小有两个参数。step默认为1。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let re1 = _.range(10),
        re2 = _.range(1, 11),
        re3 = _.range(0, 30, 5),
        re4 = _.range(0, -10, -1),
        re5 = _.range(0);
      
      console.log(re1);
      console.log(re2);
      console.log(re3);
      console.log(re4);
      console.log(re5);
    }
  }
}
</script>
```
:::
