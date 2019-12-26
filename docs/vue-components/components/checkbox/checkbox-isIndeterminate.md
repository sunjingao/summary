#### 部分选中

分为三种状态：分别是没选中、部分选中、选中。

:::demo 控制 isIndeterminate 属性 控制是否部分选中
```html
<template>
   <v-checkbox label="data1" value="data1" :isIndeterminate="isIndeterminate" @part-check-change="partCheckChange" v-model="sign">
   </v-checkbox>
</template>
<script>
export default {
  data() {
    return {
      isIndeterminate: true,
      sign: true
    }
  },
  methods:{
    partCheckChange() {
      console.log('partCheckChange');
      this.isIndeterminate = false;
    }
  },
  watch: {
    sign() {
       this.isIndeterminate = true; 
    }
  }
}
</script>
```
:::
