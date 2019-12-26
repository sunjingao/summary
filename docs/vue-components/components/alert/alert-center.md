#### 居中

图标和文字居中展示

:::demo 设置 center 属性
```html
<template>
    <v-alert title="this is title" textCenter description="this is description" @close="close"></v-alert>
    <v-alert title="this is title" textCenter description="this is description" showIcon class="alert-mt10" @close="close"></v-alert>
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
<style scoped>
  .alert-mt10 {
    margin-top: 10px
  }
</style>
```
:::


