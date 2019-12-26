#### 展示月份

展示月份

:::demo type:month
```html
<template>
     <v-date-picker :type="'month'" :options="optionsDate1" @change="change" placeholder="请选择日期"></v-date-picker>
     <v-date-picker :type="'month'" :options="optionsDate2" @change="change" class="ml20"></v-date-picker>
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
                month: 2
              }
            },
            {
              start: {
                year: 2017,
                month: 6,
              },
              end: {
                year: 2023,
                month: 11,
              }
            },
          ]
        },
       optionsDate2: {
          defaultShow: {
            year: 2018,
            month: 5,
          },
          range: [
            {
              end: {
                year: 2015,
                month: 2
              }
            },
            {
              start: {
                year: 2017,
                month: 6,
              },
              end: {
                year: 2023,
                month: 11,
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


