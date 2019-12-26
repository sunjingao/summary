#### 步数

控制每次点击增加 / 减少 改变的大小

:::demo 通过 step 属性控制
```html
<template>
    <v-input-number v-model="counter" :step="2"></v-input-number>
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


