#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
    <v-alert title="this is title" @close="close"></v-alert>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    close(event) {
      console.log(event);
    }
  }
}
</script>
```
:::


