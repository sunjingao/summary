#### 自定义描述

自定义描述内容

:::demo 使用 text 插槽
```html
<template>
<v-progress :text-inside="true" :spacing="26" :percentage="70">
    <div slot="text">自定义</div>    
</v-progress>
</template>
<script>
export default {
  data(){
     return {
     }
  },
  methods: {
  }
}
</script>
```
:::
