#### memoize

_.memoize(function, [hashFunction]) 

缓存结果。

hashFunction存在时吗，使用hashFunction执行的结果作为键名。否则使用第一个参数作为键值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      const memo = _.memoize((n) => n === 0 ? 1 : memo(n - 1) + 1),
        res = memo(3);
      
      console.log(memo.cache);
    }
  }
}
</script>
```
:::
