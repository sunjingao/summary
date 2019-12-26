#### 带有icon

不同类型带有不同的icon

:::demo 设置show-icon属性
```html
<template>
    <v-alert title="this is title" showIcon type="success" @close="close"></v-alert>
    <v-alert title="this is title" description="this is description" showIcon type="warning" class="alert-mt10" @close="close"></v-alert>
    <v-alert title="this is title" description="this is description" showIcon type="tip" class="alert-mt10" @close="close"></v-alert>
    <v-alert title="this is title" description="this is description" showIcon type="error" class="alert-mt10" @close="close"></v-alert>   
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


