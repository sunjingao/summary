#### 类型

设置不同的类型，展示不同的颜色

:::demo type支持 default、primary、success、warning、info、danger 等几种类型
```html
<template>
    <v-button @click="click">默认按钮</v-button>
    <v-button type="primary" @click="click">主要按钮</v-button>
    <v-button type="success" @click="click">成功按钮</v-button>
    <v-button type="info" @click="click">信息按钮</v-button>
    <v-button type="warning" @click="click">警告按钮</v-button>
    <v-button type="danger" @click="click">危险按钮</v-button>
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


