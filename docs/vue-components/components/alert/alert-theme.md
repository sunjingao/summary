#### 主题

展示不同的主题颜色

:::demo 设置type属性
```html
<template>

    <v-alert title="this is title" type="success" @close="close"></v-alert>
    <v-alert title="this is title" type="warning" class="alert-mt10" @close="close"></v-alert>
    <v-alert title="this is title" type="tip" class="alert-mt10" @close="close"></v-alert>
    <v-alert title="this is title" type="error" class="alert-mt10" @close="close"></v-alert>
       
    <v-alert title="this is title" type="success" :plain="false" @close="close"></v-alert>
    <v-alert title="this is title" type="warning" :plain="false" class="alert-mt10" @close="close"></v-alert>
    <v-alert title="this is title" type="tip" :plain="false" class="alert-mt10" @close="close"></v-alert>
    <v-alert title="this is title" type="error" :plain="false" class="alert-mt10" @close="close"></v-alert>
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
<style>
  .alert-mt10 {
    margin-top: 10px
  }
</style>
```
:::


