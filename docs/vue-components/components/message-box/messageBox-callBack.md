#### 回调

允许通过回调函数控制关闭

:::demo 分为cancelCallBack，confirmCallBack，closeCallBack等几个回调
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
            cancelCallBack(val){
                const message = this.$message({
                    title: '取消失败',
                    type: 'error'
                });
                message.open();
                return false;
            },
            confirmCallBack(val){
                const message = this.$message({
                    title: '确认失败',
                    type: 'error'
                });
                message.open();
                return false;
            },
            closeCallBack(val){
                const message = this.$message({
                    title: '关闭失败',
                    type: 'error'
                });
                message.open();
                return false;
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
