#### 支持原生属性

如使用 readonly

:::demo 支持原生属性
```html
<template>
    <v-input placeholder="请输入数据" v-model="inputValue" readonly></v-input>
</template>
<script>

export default {
  data(){
    return {
      inputValue:'readonly'
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


