#### 使用html自定义展示

使用html自定义展示标题及正文

:::demo 使用html自定义
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
            type:'prompt',
            title: '<span style="color:red;">这是自定义标题</span>',
            text: '<span style="color:red;">这是自定义内容</span>',
        });
        messageBox.open();
      }
  },  
}
</script>
```
:::


~~~~
