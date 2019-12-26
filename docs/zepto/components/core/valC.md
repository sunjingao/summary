#### val

val() 
val(value)  
val(function(index, oldValue){ ... })

获取或设置匹配元素的值。当没有给定value参数，返回第一个元素的值。

:::demo 基本用法
```html
<template>

    <div><input class="valC1" value="valC1" /></div>
    <div><input class="valC2" value="valC2" /></div>
    <div><input class="valC3" value="valC3" /></div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.valC1').val());
      $('.valC2').val('replaceVal2');
      $('.valC3').val(function(index, oldValue){ 
        return 'replaceV3';
      })
    }
  }
}
</script>
```
:::
