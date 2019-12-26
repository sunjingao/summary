#### 基础用法

基础用法

:::demo 基础用法
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


