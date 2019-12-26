#### 设置展示框

设置展示框图片等内容

:::demo 设置 front 和 behind 插槽
```html
<template>
    <v-autocomplete v-model="text" @query="query" @select="select">
        <span slot="front" class="auto-slot-test"></span>
        <span slot="behind" class="auto-slot-test"></span>
    </v-autocomplete>
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
<style scoped>
    .auto-slot-test {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: red;
        vertical-align: middle;
    }
</style>
```
:::


