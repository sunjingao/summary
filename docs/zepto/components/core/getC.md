#### get

get() 
get(index) 

从当前对象集合中获取所有元素或单个元素。当index参数不存在的时，以普通数组的方式返回所有的元素。
当指定index时，只返回该置的元素。这点与eq不同，该方法返回的是DOM节点，不是Zepto对象集合。

:::demo 基本用法
```html
<template>

    <div class="getC">11</div>
    <div class="getC">22</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log(
        $('.getC').get()
      );
      console.log(
        $('.getC').get(1)
      );
    }
  }
}
</script>
```
:::
