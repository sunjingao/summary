#### 关闭tooltip

不展示tooltip

:::demo 设置disabled属性
```html
<template>

    <v-tooltip content="Top Left 提示文字" placement="top-start" :disabled="disabled">
      <v-button @click="toggle">{{getContent()}}</v-button>
    </v-tooltip>
</template>
<script>
export default {
  data(){
    return {
      disabled: false,
      buttonContent:'点击关闭tooltip功能'
    }
  },
  methods:{
    
    toggle(){
      this.disabled = !this.disabled;
    },
    
    getContent(){
      return this.buttonContent = this.disabled ? '点击开启tooltip功能' : '点击关闭tooltip功能';
    },
  },
}
</script>
```
:::


