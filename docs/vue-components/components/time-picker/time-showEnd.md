#### 开始时间和结束时间

同时展示开始时间和结束时间

:::demo 使用 showEndTime 属性
```html
<template>
    <v-timepicker showEndTime :timeRange="timeRange" @timePickerSelect="timePickerSelect"></v-timepicker>
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
         endTime: {
           hour: [
             {
               start: 3,
               end: 10
             },
             {
               start: 15,
               end: 20
             }
           ],
           minute: [
             {
               start: 3,
               end: 6
             },
             {
               start: 30,
               end: 50
             },
             {
               start: 0,
               end: 2
             }
           ],
           second: [
             {
               start: 7,
               end: 17
             },
             {
               start: 18,
               end: 30
             }
           ]
         },
         default: {
           startTime: {
             hour: 11,
             minute: 6,
             second: 18
           },
           endTime: {
             hour: 10,
             minute: 1,
             second: 28
           }
         }
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


