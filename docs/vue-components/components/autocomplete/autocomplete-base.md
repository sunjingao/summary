#### 基本用法

v-model设置选中内容的value，用户输入时回调query方法，用户选中时回调select方法

:::demo 基本用法
```html
<template>
    <v-autocomplete v-model="text" @query="query" @select="select"></v-autocomplete>
</template>
<script>
export default {
  data(){
    return {
        text: '123',
        ary: [
          {label: 1, value: 11},
          {label: 2, value: 222},
          {label: 3, value: 33},
          {label: 4, value: 44},
          {label: 5, value: 55},
          {label: 6, value: 66},
          {label: 7, value: 77},
          {label: 8, value: 88},
          {label: 9, value: 99},
          {label: 10, value: 100},
          {label: 11, value: 100},
          {label: 12, value: 100},
          {label: 13, value: 100},
          {label: 14, value: 100},
          {label: 15, value: 100},
        ]
    }
  },
  methods:{
    query(val, cb){
      console.log('query:', val);
      cb(this.ary);
    },
    select(val){
      console.log('select:', val);
    }
  }
}
</script>
```
:::


