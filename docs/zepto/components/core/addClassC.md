#### addClass

addClass(name)
addClass(function(index, oldClassName){ ... })

为当前元素集合添加类。

:::demo 基本用法
```html
<template>

    <p class="addClassC">this is p</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $('.addClassC').addClass('addClassCCls1');
      $('.addClassC').addClass(function(index, oldClassName){ 
        return 'addClassCCls2';
      })
    }
  }
}
</script>
<style scoped>
.addClassCCls1 {
    color: red;
}

.addClassCCls1 {
    background-color: blue;
}
</style>
```
:::
