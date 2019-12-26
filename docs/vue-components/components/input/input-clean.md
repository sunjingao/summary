#### 允许清空

展示清空按钮

:::demo 设置 cleanable 属性
```html
<template>
    <v-input placeholder="请输入数据" v-model="inputValue" cleanable> </v-input>
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


