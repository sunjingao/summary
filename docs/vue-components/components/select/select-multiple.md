#### 多选

可以选中多个条目

:::demo 设置 multiple 属性
```html
<template>
    <v-select v-model="text" multiple @click-option="clickOption">
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

export default {
  data(){
    return {
        text: [],
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
          {label: 16, value: 106},
          {label: 17, value: 107},
          {label: 18, value: 108},
        ]
    }
  },
  methods: {
    clickOption(val, label, event) {
      console.log('click:', val, label, event);
    }
  },
  watch: {
    text(val) {
      console.log('selected array:' + val);
    }
  }
}
</script>
```
:::


