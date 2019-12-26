#### 指令局部loading

指令局部loading

:::demo 指令后不加选择器
```html
<template>

<div>

    <div v-loading="sign" class="loading-component-grap">
        <div class="loading-component-wh200"></div>
    </div>
    <div v-loading="sign" class="loading-component-grap" loading-text="文字" >
        <div class="loading-component-wh200"></div>
    </div>
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
}
</script>
<style scoped>

    .loading-component-grap {
       width: 100px;
       height: 100px;
       overflow: auto;
       border: 10px solid gray;
       padding: 25px;
    }
    
    .loading-component-wh200 {
      width: 200px;
      height: 200px;
    }
</style>
```
:::


