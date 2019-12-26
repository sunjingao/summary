#### 清除

输入框中的内容允许清空

:::demo 添加 cleanable 属性
```html
<template>
     <v-timepicker :timeRange="timeRange" @timePickerSelect="timePickerSelect" cleanable></v-timepicker>
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
         default: {
           startTime: {
             hour: 11,
             minute: 2,
             second: 18
           },
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


