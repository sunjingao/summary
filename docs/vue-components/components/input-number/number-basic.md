#### 基础用法

:::demo 基础用法
```html
<template>
    <v-input-number v-model="counter">
    </v-input-number>
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


