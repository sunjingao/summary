#### 禁止操作

禁止填写和点击来改变数字

:::demo 添加disabled属性
```html
<template>
    <v-input-number v-model="counter" disabled></v-input-number>
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


