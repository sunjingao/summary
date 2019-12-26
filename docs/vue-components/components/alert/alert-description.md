#### 设置描述文字

设置描述文字

:::demo 设置description属性
```html
<template>
    <v-alert title="this is title" description="this is description" @close="close"></v-alert>
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


