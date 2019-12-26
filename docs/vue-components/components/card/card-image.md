#### 带图片

带图片

:::demo 基本用法
```html
<template>

    <v-card class="box" :contentStyle="{padding:0}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ getCurrentDate() }}</time>
          <v-link :underline="false" type="primary" class="button">
            操作按钮
          </v-link>
        </div>
      </div>
    </v-card>
    <v-card class="box" :contentStyle="{padding:0}" style="margin-left: 20px;">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ getCurrentDate() }}</time>
          <v-link :underline="false" type="primary" class="button">
            操作按钮
          </v-link>
        </div>
      </div>
    </v-card>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    getCurrentDate(){
      let currentDate = new Date();
      return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
    },
  },
}
</script>
<style scoped>
  .box{
      width: 300px;  
   }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
  .contentClass{
    padding: 0;
  }
</style>
```
:::


