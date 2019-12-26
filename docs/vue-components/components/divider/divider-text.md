#### 设置文本

可设置文本及文本展示样式

:::demo 设置position定义展示文本位置，设置show-line定义是否展示线
```html
<template>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <v-divider position="left">少年包青天</v-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <v-divider position="center"><i class="iconfont icon-success"></i></v-divider>
    <span>为了无法计算的价值</span>
    <v-divider position="right" :show-line="false">阿里云</v-divider>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
```
:::
