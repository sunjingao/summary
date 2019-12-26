#### 范围

改变区域的范围

:::demo 通过控制 max 和 min 属性
```html
<template>
    <v-input-number v-model="counter" :min="-3" :max="10"></v-input-number>
</template>
<script>
export default {
  data(){
    return {
      counter:3
    }
  },
  watch: {
    counter(val) {
      console.log(val);
    }
  }
}
</script>
```
:::


