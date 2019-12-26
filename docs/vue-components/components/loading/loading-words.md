#### 加载文字

设置加载文字

:::demo 设置 loading-text 属性
```html
<template>

<div>
    <div class="loading-words" v-loading.body="sign" loading-text="这是文字啊文字啊文字啊文字啊文字啊">999</div>
    <button @click="toggle">toggle</button>
</div>
</template>
<script>
export default {
  data(){
    return {
        sign:false
    }
  },
  methods:{
      toggle(){
          this.sign = !this.sign;
      }
  },  
  watch:{
      sign(value){
          if(value){
              setTimeout(
                  ()=>{
                    this.sign=false;
                  },
                  3000
              )
          }
      }
  }
}
</script>
<style scoped>
    .loading-words {
        width: 100px;
        height: 100px;
        border:1px solid gray;
    }
</style>
```
:::


