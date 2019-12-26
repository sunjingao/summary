#### 设置定宽的步骤条

设置定宽的步骤条

:::demo 设置space属性
```html
<template>
    <div>
        <v-steps :process="process" :space="200">
          <v-step><span slot="title">这是标题1</span></v-step>
          <v-step><span slot="title">这是标题2</span></v-step>
          <v-step><span slot="title">这是标题3</span></v-step>
        </v-steps>
        <v-button class="steps-mt12" @click="next" type="primary">下一步</v-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      process:1
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


