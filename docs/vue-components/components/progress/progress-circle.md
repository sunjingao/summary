#### 环形进度条

以环形方式展示进度

:::demo 设置 type="circle"
```html
<template>
    <v-progress type="circle" :percentage="0" class="circle"></v-progress>
    <v-progress type="circle" :percentage="10" class="circle"></v-progress>
    <v-progress type="circle" :percentage="25" class="circle"></v-progress>
    <v-progress type="circle" :percentage="35" class="circle"></v-progress>
    <v-progress type="circle" :percentage="50" class="circle"></v-progress>
    <v-progress type="circle" :percentage="65" class="circle"></v-progress>
    <v-progress type="circle" :percentage="75" class="circle"></v-progress>
    <v-progress type="circle" :percentage="85" class="circle"></v-progress>
    <v-progress type="circle" :percentage="100" class="circle"></v-progress>
</template>
<script>
export default {
  data(){
     return {
     }
  },
  methods: {
  }
}
</script>
<style scoped>
.circle {
    display: inline-block;
    margin-left: 20px;
    width: 200px;
    height: 200px;
}
</style>
```
:::
