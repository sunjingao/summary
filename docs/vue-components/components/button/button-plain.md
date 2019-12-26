#### 朴素按钮

展示的颜色较为清爽，有边框

:::demo 控制plain属性的true / false 来实现效果
```html
<template>
    <v-button plain @click="click">默认按钮</v-button>
    <v-button type="primary" plain @click="click">主要按钮</v-button>
    <v-button type="success" plain @click="click">成功按钮</v-button>
    <v-button type="info" plain @click="click">信息按钮</v-button>
    <v-button type="warning" plain @click="click">警告按钮</v-button>
    <v-button type="danger" plain @click="click">危险按钮</v-button>
</template>
<script>
export default {
  methods:{
    click() {
      console.log('click')
    }
  }
}
</script>
```
:::


