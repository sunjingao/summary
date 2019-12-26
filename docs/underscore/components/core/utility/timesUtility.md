#### times

_.times(n, iteratee, [context]) 

调用给定的迭代函数n次,将返回值构成的数组返回。

iteratee参数是当前调用的次数。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.times(3,item=>item);
      
      console.log(res);
    }
  }
}
</script>
```
:::
