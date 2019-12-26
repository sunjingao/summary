#### 按钮类型

展示为按钮样式

:::demo 用v-checkbox-button
```html
<template>
    <!--复选框-->
    <v-checkbox-group v-model="checkedArr">
        <v-checkbox-button label="data1" value="data1"></v-checkbox-button>
        <v-checkbox-button label="data2" value="data2"></v-checkbox-button>
        <v-checkbox-button label="data3" value="data3"></v-checkbox-button>
        <v-checkbox-button label="data4" value="data4" disabled></v-checkbox-button>
    </v-checkbox-group>
</template>
<script>
export default {
  data(){
    return {
      checkedArr: ['data1', 'data2'],
    }
  },
  watch: {
      checkedArr(val) {
        console.log(val);
      }
  }
}
</script>
```
:::
