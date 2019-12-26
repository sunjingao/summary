#### button样式

设置单选的样式

:::demo 使用v-radio-button，设置为button样式
```html
<template>
    <v-radio-group v-model="radioValue" outBorder>
        <v-radio-button label="xxx" value="data11"></v-radio-button>
        <v-radio-button label="aaa" value="data22"></v-radio-button>
        <v-radio-button label="ppp" value="data33"></v-radio-button>
        <v-radio-button label="ppp" value="data44" disabled></v-radio-button>
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
