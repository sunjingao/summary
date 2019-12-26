#### 带删除节点

允许删除输入框中的内容

:::demo 使用 cleanable 属性
```html
<template>

    <v-select v-model="text" cleanable @click-option="clickOption" @clean="clean">
        <v-option
          v-for="(item,key) in ary"
          :key="key"
          :label="item.label"
          :disabled="item.disabled"
          :value="item.value">
        </v-option>
    </v-select>
</template>
<script>

import Vue from 'vue'


export default {
  data(){
    return {
        text: '',
        ary: [
          {label: 1, value: 11},
          {label: 2, value: '222'},
          {label: 3, value: 33, disabled: true},
          {label: 4, value: 44},
          {label: 5, value: 55},
          {label: 6, value: 66},
          {label: 7, value: 77},
          {label: 8, value: 88},
          {label: 9, value: 99},
          {label: 10, value: 100},
          {label: 11, value: 101},
          {label: 12, value: 102},
          {label: 13, value: '103'},
          {label: 14, value: 104},
          {label: 15, value: 105},
        ]
    }
  },
  methods:{
    clickOption(val, label, event) {
      console.log('click:', val, label, event);
    },
    clean(event) {
      console.log('clean:', event);  
    }
  }
}
</script>
```
:::


