#### 展示button样式

条目以button样式进行展示

:::demo 设置 background 属性为true
```html
<template>
<v-pagination :options="paginationOption" @page-change="paginationPageChange">
</v-pagination>
</template>
<script>
export default {
  data(){
    return {
        paginationOption: {
          isButton: true,
          total: 500
        },
    }
  },
  methods:{
    paginationPageChange(item){
        console.log("pagination");
        console.log(item);
    },
  }
}
</script>
```
:::


