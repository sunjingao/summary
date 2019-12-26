#### uniq

_.uniq(array, [iteratee]) 

数组去重。 

传入iteratee时，根据iteratee的返回值进行排序。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.uniq([1, 2, 1, 4, 1, 3]),
        res2 = _.uniq([{aa:22}, {aa:11}, {aa:33}],item=>item.aa);
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
