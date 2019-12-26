#### 设置宽高

设置宽高

:::demo 使用width height 属性
```html
<template>
    <v-timepicker :timeRange="timeRange" @timePickerSelect="timePickerSelect" :width="220" :height="60"></v-timepicker>
</template>
<script>
export default {
  data(){
    return {
       timeRange: {
         startTime: {
           hour: [
             {
               start: 10,
               end: 15
             },
             {
               start: 2,
               end: 5
             }
           ],
           minute: [
             {
               start: 1,
               end: 6
             },
             {
               start: 30,
               end: 55
             },
             {
               start: 57,
               end: 58
             }
           ],
           second: [
             {
               start: 16,
               end: 18
             },
             {
               start: 7,
               end: 9
             }
           ]
         },
       },
    }
  },
  methods:{
      timePickerSelect(val){
          console.log('in timePickerSelect');
          console.log(val);
      }
  },
}
</script>
```
:::


