#### 设置关闭处的文字内容

设置关闭处的文字内容

:::demo 设置close-text属性
```html
<template>
    <v-alert title="this is title" close-text="知道了" @close="close"></v-alert>
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


