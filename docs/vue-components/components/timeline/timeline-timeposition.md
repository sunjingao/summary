#### ⾃定义时间位置

时间可以位于上方展示

:::demo 设置placement属性为top
```html
<template>

  <v-timeline>
    <v-timeline-item time="2018/4/12" placement="top" description="模板">
    </v-timeline-item>
    <v-timeline-item time="2018/4/3" placement="top" description="模板">
    </v-timeline-item>
    <v-timeline-item time="2018/4/2" placement="top" description="模板">
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


