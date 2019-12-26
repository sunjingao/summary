#### 选中

选中内容

:::demo 通过控制v-model，设置radio选中
```html
<template>
    <v-radio-group v-model="radioValue">
        <v-radio label="xxx" value="data1"></v-radio>
        <v-radio label="aaa" value="data2"></v-radio>
        <v-radio label="ppp" value="data3"></v-radio>
    </v-radio-group>
   
</template>
<script>
export default {
  data(){
     return {
       radioValue: "data3",
     }
  },
  watch: {
      radioValue(val){
        console.log(val);
      }
    }
}
</script>
```
:::



