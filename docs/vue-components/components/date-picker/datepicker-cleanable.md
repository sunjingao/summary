#### 清除功能

允许清空输入框中的内容

:::demo cleanable
```html
<template>
     <v-date-picker :type="'year'" :options="optionsDate1" @change="change" placeholder="请选择日期" cleanable></v-date-picker>
     <v-date-picker :type="'year'" :options="optionsDate2" @change="change" cleanable class="ml20"></v-date-picker>
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


