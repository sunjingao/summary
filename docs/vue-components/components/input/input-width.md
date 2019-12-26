#### 宽高及字体大小

对输入框的宽高及字体大小进行设置

:::demo 设置width，height，fz
```html
<template>
    <v-input placeholder="请输入数据" v-model="inputValue" :width="300" :height="50" fz="20px"></v-input>
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


