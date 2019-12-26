#### 圆角按钮

按钮的border有一定倾斜度

:::demo 控制round属性的true / false 来实现效果
```html
<template>
    <v-button type="primary" round @click="click">
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


