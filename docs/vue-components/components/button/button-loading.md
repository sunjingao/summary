#### 加载中

按钮中显示加载图标

:::demo 控制loading属性的true / false 来实现效果
```html
<template>
    <v-button type="primary" :loading="true" @click="click">
        按钮
    </v-button>
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


