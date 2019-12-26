#### chain

_.chain(obj) 

可以连缀，直到使用value方法为止。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      let stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}],
       youngest = _.chain(stooges)
       .sortBy(function(stooge){ return stooge.age; })
       .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
       .first()
       .value();
      
      console.log(youngest);
    }
  }
}
</script>
```
:::
