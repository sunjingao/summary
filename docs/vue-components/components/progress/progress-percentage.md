#### 百分比内显

百分比显示在进度条右侧

:::demo 设置 text-inside 属性
```html
<template>
    <v-progress :text-inside="true" :spacing="26" :percentage="70"></v-progress>
    <v-progress :text-inside="true" :spacing="24" :percentage="100"></v-progress>
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
```
:::
