#### 消息类型提示

默认为message类型。右下角仅有确认按钮

:::demo 默认的type为message类型
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
          
        const messageBox = this.$messageBox({
            title: '这是标题',
            text: '这是内容',
        });
        messageBox.open();
      }
  },  
}
</script>
```
:::


~~~~
