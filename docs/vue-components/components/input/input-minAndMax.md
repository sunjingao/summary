#### 最大最小值

设置最大最小值  

:::demo 通过 max，min 设置最大最小值
```html
<template>
    <v-input placeholder="请输入数据" v-model="inputValue" type="number" :max="10" :min="5"></v-input>
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


