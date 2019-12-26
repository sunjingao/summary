#### 自定义模板

自定义条目的展示样式

:::demo 使用默认插槽
```html
<template>

    <v-select v-model="text" @click-option="clickOption">
        <v-option
          v-for="(item,key) in ary"
          :key="key"
          :label="item.label"
          :disabled="item.disabled"
          :value="item.value">
            <div>template:label:{{item.label}}</div>
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
    }
  }
}
</script>
```
:::


