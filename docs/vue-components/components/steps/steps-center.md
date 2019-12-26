#### 标题和描述居中

标题和描述居中展示

:::demo 设置align-center属性
```html
<template>

    <div>
    
        <v-steps :process="process" align-center >
          <v-step title="步骤 1" description="这是描述 1"></v-step>
          <v-step title="步骤 2" description="这是描述 2"></v-step>
          <v-step title="步骤 3" description="这是描述 3"></v-step>
        </v-steps>
        
        <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      process:0,
    }
  },
  methods:{
    next() {
        if (this.process++ > 2) this.process = 0;
      },
  }
}
</script>
<style scoped>
    .steps-mt12 {
        margin-top: 12px;
    }
</style>
```
:::


