#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <v-select v-model="text" @click-option="clickOption">
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
        text: 55,
        ary: [
          {label: 1, value: 11,},
          {label: 2, value: '222', disabled: true},
          {label: 3, value: 33, disabled: true},
          {label: 4, value: 44},
          {label: 5, value: 55},
          {label: 6, value: 66, disabled: true},
          {label: 7, value: 77, disabled: true},
          {label: 8, value: 88, disabled: true},
          {label: 9, value: 99, disabled: true},
          {label: 10, value: 100, disabled: true},
          {label: 11, value: 101, disabled: true},
          {label: 12, value: 102, disabled: true},
          {label: 13, value: '103', disabled: true},
          {label: 14, value: 104, disabled: true},
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


