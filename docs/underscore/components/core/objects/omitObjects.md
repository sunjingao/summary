#### omit

_.omit(object, *keys) 

返回一个不包括*keys的对象。

*key可以为属性或函数。当为函数时，参数为元素值、元素索引、对象。作用域为对象。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid'),
        res2 = _.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
        return _.isValueType(value, 'number');
      });
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
