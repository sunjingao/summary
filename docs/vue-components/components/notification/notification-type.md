#### 主题

展示不同的背景颜色

:::demo 设置type属性
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
            type: 'success'
        });
        notification.open();
      }
  },  
}
</script>
```
:::


~~~~
