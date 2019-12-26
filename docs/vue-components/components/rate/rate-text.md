#### 辅助文字

自定义展示内容

:::demo 设置text
```html
<template>
   <v-rate :text="text" @rateSelectChange="rateSelectChange"></v-rate>
</template>
<script>
export default {
  data: function() {
    return {
      text: [11,22,33,44,55]
    }
  },
  methods: {
    rateSelectChange(val) {
      console.log('当前内容：' + val);
    },
  },
}
</script>
```
:::


