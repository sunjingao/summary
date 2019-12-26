#### 指令全屏loading

全屏loading

:::demo 指令后加.body为全屏展示
```html
<template>

<div>
    <div class="loading-all" v-loading.body="sign">999</div>
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
    .loading-all {
        width: 100px;
        height: 100px;
        border:1px solid gray;
    }
</style>
```
:::


