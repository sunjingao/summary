#### 禁止选中

禁止操作条目

:::demo 通过添加disabled禁止操作
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
                disabled: false
              },
              {
                value: "北京",
                label: "北京",
                key: 1,
                checked: false,
                disabled: false
              },
              {
                value: "广州",
                label: "广州",
                key: 2,
                checked: true,
                disabled: false
              },
              {
                value: "深圳",
                label: "深圳",
                key: 3,
                checked: true,
                disabled: true
              },
              {
                value: "南京",
                label: "南京",
                key: 4,
                checked: false,
                disabled: false
              },
              {
                value: "杭州",
                label: "杭州",
                key: 5,
                checked: false,
                disabled: false
              },
              {
                value: "重庆",
                label: "重庆",
                key: 6,
                checked: false,
                disabled: false
              },
              {
                value: "天津",
                label: "天津",
                key: 7,
                checked: false,
                disabled: false
              },
              {
                value: "大连",
                label: "大连",
                key: 8,
                checked: false,
                disabled: false
              },
              {
                value: "苏州",
                label: "苏州",
                key: 9,
                checked: false,
                disabled: false
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
                disabled: true
              },
              {
                value: "吉林",
                label: "吉林",
                key: 11,
                checked: false,
                disabled: false
              },
              {
                value: "哈尔滨",
                label: "哈尔滨",
                key: 12,
                checked: true,
                disabled: false
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
