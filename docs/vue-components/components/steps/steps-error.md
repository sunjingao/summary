#### 错误状态

设置当前状态为错误

:::demo 设置error属性为true
```html
<template>

    <div>
    
        <v-steps :process="process" :error="true">
          <v-step title="步骤 1"></v-step>
          <v-step title="步骤 2"></v-step>
          <v-step title="步骤 3"></v-step>
        </v-steps>    
    </div>
</template>
<script>
export default {
  data(){
    return {
      process:2,
    }
  },
  methods:{
  }
}
</script>

```
:::


