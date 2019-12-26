#### 禁止选中

禁止选中

:::demo disabled 禁止选中
```html
<template>
    <v-input placeholder="请输入数据" v-model="inputValue" disabled></v-input>
</template>
<script>
export default {
  data(){
    return {
      inputValue:''
    }
  },
  watch: {
    inputValue(val) {
      console.log(val);
    }
  }
}
</script>
```
:::


