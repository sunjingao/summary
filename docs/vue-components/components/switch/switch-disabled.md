#### 禁用

禁止操作

:::demo 通过设置 disabled，禁止操作
```html
<template>
    <v-switch disabled>
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


