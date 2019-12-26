#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <div>
    
        <v-steps :process="process">
          <v-step title="步骤 1"></v-step>
          <v-step title="步骤 2"></v-step>
          <v-step title="步骤 3"></v-step>
        </v-steps>
        
        <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      process:1,
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


