#### 位置

控制点击区域的位置

:::demo controlsPosition属性的 bothSides 和 rightSide 属性
```html
<template>
    <v-input-number v-model="counter" controlsPosition="rightSide"></v-input-number>
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


