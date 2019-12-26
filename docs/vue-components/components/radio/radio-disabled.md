#### 禁止操作

禁止选中

:::demo 通过控制disabled属性，设置radio禁止选中
```html
<template>
    <v-radio-group v-model="radioValue" disabled>
        <v-radio label="xxx" value="data1"></v-radio>
        <v-radio label="aaa" value="data2"></v-radio>
        <v-radio label="ppp" value="data3"></v-radio>
    </v-radio-group>
    
    <v-radio-group v-model="radioValues">
        <v-radio label="xxx" value="data1"></v-radio>
        <v-radio label="aaa" value="data2" disabled></v-radio>
        <v-radio label="ppp" value="data3"></v-radio>
    </v-radio-group>
</template>
<script>
export default {
  data(){
     return {
       radioValue: "data3",
       radioValues: "data3",
     }
  },
  watch: {
      radioValue(val){
        console.log(val);
      },
      radioValues(val){
        console.log(val);
      },
    }
}
</script>
```
:::



