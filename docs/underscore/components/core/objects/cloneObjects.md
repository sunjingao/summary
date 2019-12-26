#### clone

_.clone(object) 

浅拷贝object。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res = _.clone({name: 'moe'});
      console.log(res);
    }
  }
}
</script>
```
:::
