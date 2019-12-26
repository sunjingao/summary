#### 单个多选

单个多选框选中与没选中

:::demo 设置一个checkbox即可
```html
<template>
   <v-checkbox v-model="sign"></v-checkbox>
</template>
<script>
export default {
  data() {
    return {
      sign: true
    }
  },
  watch: {
    sign(sign) {
      console.log(sign);
    }
  }
}
</script>
```
:::
