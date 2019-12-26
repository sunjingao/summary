#### 自定义模板

自定义条目的展示样式

:::demo 使用 injectComponentName 注入组件
```html
<template>
    <v-autocomplete v-model="text" @query="query" @select="select" :injectComponentName="auto"></v-autocomplete>
</template>
<script>

  import Vue from 'vue'
  Vue.component("auto", {
    template: "<div>label:{{item.label}} value:{{item.value}}</div>",
    props:{
      item:{
        require:true,
        type:Object
      }
    },
  });

export default {
  data(){
    return {
        text: '123',
        auto: 'auto',
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
    query(val, cb) {
      console.log('query:', val);
      cb(this.ary);
    },
    select(val) {
      console.log('select:',val);
    }
  }
}
</script>
```
:::


