#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
       <v-transfer :options="transferOptions" @change="transfer">
       </v-transfer>
</template>
<script>
export default {
  data(){
     return {
        transferOptions: {
          left: {
            title: "左侧内容",
            content: [
              {
                value: "上海",
                label: "上海",
                key: 0,
                checked: false,
              },
              {
                value: "北京",
                label: "北京",
                key: 1,
                checked: false,
              },
              {
                value: "广州",
                label: "广州",
                key: 2,
                checked: true,
              },
              {
                value: "深圳",
                label: "深圳",
                key: 3,
                checked: true,
              },
              {
                value: "南京",
                label: "南京",
                key: 4,
                checked: false,
              },
              {
                value: "杭州",
                label: "杭州",
                key: 5,
                checked: false,
              },
              {
                value: "重庆",
                label: "重庆",
                key: 6,
                checked: false,
              },
              {
                value: "天津",
                label: "天津",
                key: 7,
                checked: false,
              },
              {
                value: "大连",
                label: "大连",
                key: 8,
                checked: false,
              },
              {
                value: "苏州",
                label: "苏州",
                key: 9,
                checked: false,
              }
            ]
          },
          right: {
            title: "右侧内容",
            content: [
              {
                value: "辽宁",
                label: "辽宁",
                key: 10,
                checked: false,
              },
              {
                value: "吉林",
                label: "吉林",
                key: 11,
                checked: false,
              },
              {
                value: "哈尔滨",
                label: "哈尔滨",
                key: 12,
                checked: true,
              }
            ]
          }
        },
     }
  },
  methods:{
    transfer(value) {
      console.log("this is in v-transfer");
      console.log(value);
    },
  }
}
</script>
```
:::
