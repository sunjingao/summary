#### 禁止操作

禁止操作按钮

:::demo 控制disabled属性的true / false 来实现效果
```html
<template>
    <v-button type="primary" disabled @click="click">
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


