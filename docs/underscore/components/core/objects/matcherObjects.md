#### matcher

_.matcher(attrs) 

闭包，保存传入的对象，返回一个函数。再执行函数并传入一个对象，判断此对象中是否全部包括了保存的对象中的键值对。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let list = {aa:111, bb:222, selected: true, visible: true},
        ready = _.matcher({selected: true, visible: true});
      
      console.log(ready(list));
    }
  }
}
</script>
```
:::
