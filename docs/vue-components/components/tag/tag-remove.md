#### 删除

带有删除功能

:::demo 添加 closeable 属性
```html
<template>
    
    <v-tag closeable @close="close">标签</v-tag>
    
    <v-tag type="default" closeable @close="close">标签</v-tag>    

    <v-tag type="primary" closeable @close="close">标签</v-tag>
    
    <v-tag type="success" closeable @close="close">标签</v-tag>
    
    <v-tag type="info" closeable @close="close">标签</v-tag>
    
    <v-tag type="warning" closeable @close="close">标签</v-tag>
    
    <v-tag type="danger" closeable @close="close">标签</v-tag>  
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    close(event) {
      console.log(event)
    }
  }
}
</script>
```
:::


