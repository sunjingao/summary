#### 背景颜色

自定义背景颜色

:::demo 通过 activeBgColor 和 inactiveBgColor 进行true和false两种状态的背景颜色设置
```html
<template>
    <v-switch v-model="val" activeBgColor="pink" inactiveBgColor="red">
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


