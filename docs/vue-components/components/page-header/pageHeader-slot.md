#### 自定义展示

自定义标题和展示内容

:::demo 使用标题和内容的默认插槽
```html
<template>
    <v-page-header @back="goBack">
        <div slot="title">自定义标题</div>
        <div slot="content">自定义内容</div>
    </v-page-header>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    goBack(){
      console.log('click back');
    },
  }
}
</script>
```
:::


