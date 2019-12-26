#### create

_.create(prototype, props) 

创建一个对象，并具有赋值功能。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let Stooge = function (){},
        moe = _.create(Stooge.prototype, {name: "Moe"});
      console.log(moe);
    }
  }
}
</script>
```
:::
