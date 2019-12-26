#### 基本用法

基本用法

:::demo v-model 设置 初始状态
```html
<template>
    <v-switch v-model="val">
        <span slot="before">按年付费</span>
        <span slot="behind">按月付费</span>
    </v-switch>
</template>
<script>
export default {
  data(){
    return {
      val:true
    }
  },
  watch:{
    val(value){
      console.log(value)
    }
  }
}
</script>
```
:::


