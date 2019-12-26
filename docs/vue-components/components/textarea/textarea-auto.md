#### 自适应

高度自适应

:::demo 设置 autosize 属性为true
```html
<template>
    <v-textarea v-model="text" autosize></v-textarea>
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


