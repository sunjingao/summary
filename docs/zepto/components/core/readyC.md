#### ready

ready(function($){ ... })

添加一个事件侦听器，当页面DOM加载完毕 “DOMContentLoaded” 事件触发时触发。建议使用 $()来代替这种用法。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $(document).ready(function(){
        console.log(111);
      });
    }
  }
}
</script>
```
:::
