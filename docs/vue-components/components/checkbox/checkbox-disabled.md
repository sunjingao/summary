#### 禁止操作

禁止选中

:::demo 控制 disabled属性 控制是否允许选中
```html
<template>

    <v-checkbox-group v-model="checkedArr1" disabled>
        <v-checkbox label="data1" value="data1"></v-checkbox>
        <v-checkbox label="data2" value="data2"></v-checkbox>
        <v-checkbox label="data3" value="data3"></v-checkbox>
    </v-checkbox-group>
    <br />
    <v-checkbox-group v-model="checkedArr2">
        <v-checkbox label="data1" value="data1"></v-checkbox>
        <v-checkbox label="data2" value="data2" disabled></v-checkbox>
        <v-checkbox label="data3" value="data3"></v-checkbox>
    </v-checkbox-group>
</template>
<script>
export default {
  data(){
    return {
      checkedArr1: ['data1', 'data2'],
      checkedArr2: ['data1'],
    }
  },
  watch: {
      checkedArr1(val) {
        console.log(val);
      },
      checkedArr2(val) {
        console.log(val);
      },
  }
}
</script>
```
:::
