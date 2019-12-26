#### 线型进度条

线型进度条

:::demo 线型进度条
```html
<template>
    <v-progress :percentage="50"></v-progress>
    <v-progress :percentage="99"></v-progress>
    <v-progress :percentage="100" :format="format"></v-progress>
</template>
<script>
export default {
  data(){
     return {
     }
  },
  methods: {
    format(val){
      return '满';
    }
  }
}
</script>
```
:::