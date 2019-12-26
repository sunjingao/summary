#### reduce

reduce(function(memo, item, index, array){ ... }, [initial]) 

与 Array.reduce有相同的用法，遍历当前对象集合。memo是函数上次的返回值。迭代进行遍历。

:::demo 基本用法
```html
<template>

    <div class="reduceC">reduceC1</div>
    <div class="reduceC">reduceC2</div>
    <div class="reduceC">reduceC3</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      $('.reduceC').reduce(
        (val,item,index,all) => {
          console.log(val,item,index,all);
        }
      )
    }
  }
}
</script>
```
:::
