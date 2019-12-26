#### 字体颜色

自定义字体颜色

:::demo 通过 activeFontColor 和 inactiveFontColor 进行true和false两种状态的字体颜色设置
```html
<template>
    <v-switch activeFontColor="red" inactiveFontColor="blue" v-model="val">
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


