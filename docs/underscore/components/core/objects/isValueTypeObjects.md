#### isValueType

_.isValueType(value, *type)

判断值的类型，type可以为某个类型或包含相应类型的数组。

执行null,undefined,number,string,boolean,function,object,array,collection(数组及伪数组)等几种类型的判断。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log(_.isValueType(123, 'number'));
      console.log(_.isValueType('123', ['string']));
    }
  }
}
</script>
```
:::
