#### 颜色配置

自定义线和圆形的颜色

:::demo 设置circularColor和lineColor的颜色
```html
<template>

   <v-timeline>
    <v-timeline-item
      v-for="(activity, index) in activities1"
      :key="index"
      :time="activity.timestamp"
      :description="activity.content"
      :circularColor="activity.circularColor"
      :lineColor="activity.lineColor"
      >
    </v-timeline-item>
  </v-timeline>
  
  
  <v-timeline>
    <v-timeline-item
      v-for="(activity, index) in activities2"
      :key="index"
      :time="activity.timestamp"
      :description="activity.content"
      >
        <div slot="circular" class="circular-test"></div>
        <div slot="line" class="line-test" :class="index === activities2.length - 1 && 'isLast'"></div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data(){
    return {
       activities1: [
         {
              content: '支持自定义颜色',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, 
            {
              content: '支持自定义颜色',
              timestamp: '2018-04-03 20:46',
              circularColor: 'red',
              lineColor: 'blue',
            },
             {
              content: '支持自定义颜色',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, 
            {
              content: '支持自定义颜色',
              timestamp: '2018-04-03 20:46'
            }
          ],
          
       activities2: [
         {
              content: '自定义图形',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, 
            {
              content: '自定义图形',
              timestamp: '2018-04-03 20:46',
            },
             {
              content: '自定义图形',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, 
            {
              content: '自定义图形',
              timestamp: '2018-04-03 20:46'
            }
          ]
    }
  },
}
</script>
<style scoped>

    .circular-test {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-size: 20px;
      background-color: #e4e7ed;
    }
    
    .line-test {
      width: 2px;
      height: calc(100% - 10px);
      margin-left: 9px;
      background-color: #e4e7ed;
    }
    
    .line-test.isLast {
       height: 0;
    }
</style>
```
:::


