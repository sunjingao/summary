#### 标题和描述的自定义

自定义标题和描述的展示

:::demo 使用标题和描述的插槽
```html
<template>

    <div>
    
        <v-steps :process="process">
          <v-step><span slot="title">这是标题1</span><span slot="description">这是描述1</span></v-step>
          <v-step><span slot="title">这是标题2</span><span slot="description">这是描述2</span></v-step>
          <v-step><span slot="title">这是标题3</span><span slot="description">这是描述3</span></v-step>
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


