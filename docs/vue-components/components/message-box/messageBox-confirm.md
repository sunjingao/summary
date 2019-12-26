#### 确认类型提示

确认类型。右下角有取消及确认按钮

:::demo 设置type为confirm
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
          message: null,
          text: "alalalalalalalalalalalalalalalalalalalalalalalala"
        },
    }
  },
  methods:{
      
      open(){
          
        const messageBox = this.$messageBox({
            type:'confirm',
            title: '这是标题',
            text: '这是内容',
           cancelCallBack(val){
                this.message = this.$message({
                    title: 'cancel时的错误提示',
                    type: 'error'
                });
                this.message.open();
                return true;
            },
            confirmCallBack(val){
               this.message = this.$message({
                    title: 'confirm时的错误提示',
                    type: 'error'
                });
                this.message.open();
                return true;
            },
            closeCallBack(val){
               this.message = this.$message({
                    title: 'close时的错误提示',
                    type: 'error'
                });
                this.message.open();
                return true;
            },
        });
        messageBox.open();
      }
  },  
}
</script>
```
:::


~~~~
