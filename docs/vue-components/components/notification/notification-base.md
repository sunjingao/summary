#### 基本用法

基本用法。默认从右上角展示

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
        const notification = this.$notification({
            title: '这是一条通知'
        });
        notification.open();
      }
  },  
}
</script>
```
:::


~~~~
