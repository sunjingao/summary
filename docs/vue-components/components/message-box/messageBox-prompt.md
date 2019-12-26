#### 提交类型提示

提交类型。带有输入内容

:::demo 设置type为prompt
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
