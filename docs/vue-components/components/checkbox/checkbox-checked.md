#### 默认选中

展示默认选中项

:::demo 控制v-model进行多选控制
```html
<template>
    <!--复选框-->             
    <v-checkbox-group v-model="checkedArr">
        <v-checkbox label="data1" value="data1"></v-checkbox>
        <v-checkbox label="data2" value="data2"></v-checkbox>
        <v-checkbox label="data3" value="data3"></v-checkbox>
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
