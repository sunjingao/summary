#### 宽高设置

宽高设置

:::demo 设置width，height属性
```html
<template>
     <v-date-picker :type="'year'" :options="optionsDate1" @change="change" placeholder="请选择日期" :width="220" :height="60"></v-date-picker>
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
              }
            },
            {
              start: {
                year: 2017,
              },
              end: {
                year: 2023,
              }
            },
          ]
        },
       optionsDate2: {
          defaultShow: {
            year: 2018,
          },
          range: [
            {
              end: {
                year: 2015,
              }
            },
            {
              start: {
                year: 2017,
              },
              end: {
                year: 2023,
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


