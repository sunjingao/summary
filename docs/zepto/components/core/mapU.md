#### $.map

$.map(collection, function(item, index){ ... }) 

遍历collection，将每个内容的返回值组成数组返回。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = $.map([1,2,3,4,5],function(item,index){
        if(item>1){return item*item;}
      }); 
      let res2 = $.map({"yao":1,"tai":2,"yang":3},function(item,index) {
        if(item>1){return item*item;}
      }); 
      
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
