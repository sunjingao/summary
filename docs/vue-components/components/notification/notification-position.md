#### 位置

展示方位控制

:::demo 设置positionType属性
```html
<template>
    <div>
        <button @click="open('rightTop')">rightTop</button>
        <button @click="open('rightBottom')">rightBottom</button>
        <button @click="open('leftBottom')">leftBottom</button>
        <button @click="open('leftTop')">leftTop</button>
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
      open(position){
        const notification = this.$notification({
            title: '这是一条消息提示',
            type: 'success',
            positionType: position
        });
        notification.open();
      }
  },  
}
</script>
```
:::


~~~~
