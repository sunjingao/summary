#### ⾃定义展示

自定义展示内容

:::demo 使用默认插槽
```html
<template>

  <v-timeline>
    <v-timeline-item time="2018/4/12" description="模板">
      <v-card class="mb20">
        <h4>更新 Github 模板</h4>
        <p>提交于 2018/4/12 20:46</p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item time="2018/4/3" description="模板">
      <v-card class="mb20">
        <h4>更新 Github 模板</h4>
        <p>提交于 2018/4/3 20:46</p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item time="2018/4/2" description="模板">
      <v-card class="mb20">
        <h4>更新 Github 模板</h4>
        <p>提交于 2018/4/2 20:46</p>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data(){
    return {
    }
  },
}
</script>
<style scoped>
    .mb20 {
        margin-bottom: 20px;;
    }
</style>
```
:::


