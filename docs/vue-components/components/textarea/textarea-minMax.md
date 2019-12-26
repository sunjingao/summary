#### 设置高度范围

设置高度范围

:::demo 设置autosize对象，如 :autosize="{ minRows: 2, maxRows: 4}"
```html
<template>
    <v-textarea v-model="text" :autosize="{ minRows: 2, maxRows: 4}"></v-textarea>
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


