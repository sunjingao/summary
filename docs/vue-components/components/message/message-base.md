#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
    <div>
        <button @click="open">click</button>
    </div>
</template>
<script>
export default {
  data(){
    return {
        messageOptions: {
          text: "alalalalalalalalalalalalalalalalalalalalalalalala"
        },
    }
  },
  methods:{
      
      open(){
        const message = this.$message({
            title: '这是一条消息提示'
        });
        message.open();
      }
  },  
}
</script>
<style>
</style>
```
:::


~~~~
