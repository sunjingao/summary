#### 边框

设置单选的border样式

:::demo 通过控制outBorder属性，设置radio的border
```html
<template>
    <v-radio-group v-model="radioValue" outBorder>
        <v-radio label="xxx" value="data11"></v-radio>
        <v-radio label="aaa" value="data22"></v-radio>
        <v-radio label="ppp" value="data33"></v-radio>
        <v-radio label="ppp" value="data44" disabled></v-radio>
    </v-radio-group>
</template>
<script>
export default {
  data(){
     return {
       radioValue: "data33",
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
