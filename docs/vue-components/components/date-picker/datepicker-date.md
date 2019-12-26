#### 展示日期

展示日期

:::demo type:date
```html
<template>
     <v-date-picker :type="'date'" :options="optionsDate1" @change="change" placeholder="请选择日期"></v-date-picker>
</template>
<script>
export default {
  data(){
    return {
       optionsDate1: {
          range: [
            {
              end: {
                year: 2015,
                month: 2,
                date: 3,
              }
            },
            {
              start: {
                year: 2017,
                month: 6,
                date: 1
              },
              end: {
                year: 2023,
                month: 11,
                date: 20
              }
            },
          ]
        },
       optionsDate2: {
          defaultShow: {
            year: 2018,
            month: 5,
            date:5,
          },
          range: [
            {
              end: {
                year: 2015,
                month: 2,
                date: 3,
              }
            },
            {
              start: {
                year: 2017,
                month: 6,
                date: 1
              },
              end: {
                year: 2023,
                month: 11,
                date: 20
              }
            },
          ]
        },
    }
  },
  methods:{
      change(val){
        console.log('in time change:', val);
      }
  },
}
</script>
```
:::


