#### property

.propertyOf(object) 

闭包用法，存储对象的属性名称，返回一个函数。执行这个函数（传入参数为对象），返回这个对象的属性值。

path可为数组，将会按照的顺序依次寻找对象的返回值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let stooge = {name: 'moe'};
      console.log('moe' === _.property('name')(stooge));

      let stooges = {moe: {fears: {worst: 'Spiders'}}, curly: {fears: {worst: 'Moe'}}},
        curlysWorstFear = _.property(['curly', 'fears', 'worst']);
      console.log(curlysWorstFear(stooges));
    }
  }
}
</script>
```
:::
