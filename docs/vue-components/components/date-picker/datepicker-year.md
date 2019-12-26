#### 年份

展示年份

:::demo type:year
```html
<template>
     <v-date-picker :type="'year'" :options="optionsDate1" @change="change" placeholder="请选择日期"></v-date-picker>
     <v-date-picker :type="'year'" :options="optionsDate2" @change="change" class="ml20"></v-date-picker>
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
<style scoped>
.ml20 {
    margin-left: 20px;
}
</style>
```
:::


