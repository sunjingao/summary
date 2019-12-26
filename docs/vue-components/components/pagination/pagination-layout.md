#### 自定义布局

自定义展示内容及展示顺序

:::demo 设置 layout 属性控制 展示内容及展示顺序
```html
<template>
<v-pagination :options="paginationOption" @page-change="paginationPageChange" @select-change="selectChange">
</v-pagination>
</template>
<script>
export default {
  data(){
    return {
        paginationOption: {
          layout: ['prev', 'content', 'next', 'sizes', 'jumper','total'],
          total: 500
        },
    }
  },
  methods:{
    paginationPageChange(item){
        console.log("pagination");
        console.log(item);
    },
    selectChange(value){
        console.log("selectChange");
        console.log(value);
    }
  }
}
</script>
```
:::


