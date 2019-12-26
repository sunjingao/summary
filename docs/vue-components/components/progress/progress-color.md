#### 线条颜色

自定义线条颜色

:::demo 设置 bgColor 控制进度条颜色
```html
<template>
<v-progress :percentage="percentage" :bgColor="customColor"></v-progress>

<v-progress :percentage="percentage" :bgColor="customColorMethod"></v-progress>

<v-progress :percentage="percentage" :bgColor="customColors"></v-progress>
<div>
  <v-button-group>
    <v-button @click="decrease">-</v-button>
    <v-button @click="increase">+</v-button>
  </v-button-group>
</div>

</template>
<script>
export default {
  data(){
     return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {bgColor: '#f56c6c', percentage: 20},
          {bgColor: '#e6a23c', percentage: 40},
          {bgColor: '#5cb87a', percentage: 60},
          {bgColor: '#1989fa', percentage: 80},
          {bgColor: '#6f7ad3', percentage: 100}
        ]
     }
  },
  methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
}
</script>
```
:::