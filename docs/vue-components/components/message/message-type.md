#### 主题

展示不同的主题背景

:::demo 设置type值
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
            title: '这是一条消息提示',
            type: 'success'
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
