#### 偏移

初始展示时有一个偏移量

:::demo 设置offset属性
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
        const notification = this.$notification({
            title: '这是一条消息提示',
            type: 'success',
            offset: 100
        });
        notification.open();
      }
  },  
}
</script>
```
:::


~~~~
