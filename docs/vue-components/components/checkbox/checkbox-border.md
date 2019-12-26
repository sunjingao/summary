#### 边框

展示边框

:::demo 添加 outBorder 属性
```html
<template>
    <!--复选框-->
    <v-checkbox-group outBorder v-model="checkedArr">
        <v-checkbox label="data1" value="data1"></v-checkbox>
        <v-checkbox label="data2" value="data2"></v-checkbox>
        <v-checkbox label="data3" value="data3"></v-checkbox>
        <v-checkbox label="data4" value="data4" disabled></v-checkbox>
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
