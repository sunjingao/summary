#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

   <v-timeline>
    <v-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :time="activity.timestamp"
      :description="activity.content"
      >
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data(){
    return {
        activities: [
            {
              content: '活动按期开始',
              timestamp: '2018-04-15'
            },
            {
              content: '通过审核',
              timestamp: '2018-04-13'
            }, 
            {
              content: '创建成功',
              timestamp: '2018-04-11'
            }
        ]
    }
  },
}
</script>
```
:::


