#### 只读

只读，不可操作。允许图标部分选中。

:::demo 设置 score-template，允许小数
```html
<template>
   <v-rate :score-template="3.5" @rateSelectChange="rateSelectChange"></v-rate>
</template>
<script>
export default {
  methods:{
    rateSelectChange(val) {
      console.log('当前内容：' + val);
    },
  }
}
</script>
```
:::


