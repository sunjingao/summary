#### 基本用法

最大高度为默认高度

:::demo 基本用法
```html
<template>
    <v-textarea v-model="text"></v-textarea>
</template>
<script>
export default {
  data(){
    return {
      text:'123'
    }
  },
  watch: {
    text(val) {
      console.log(val);
    }
  }
}
</script>
```
:::


