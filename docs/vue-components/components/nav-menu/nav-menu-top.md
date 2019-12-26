#### 顶栏

参考 Tabs 用法

:::demo 基本用法
```html
<template>

<div class="bc">

  <v-tabs v-model="activeName" @tab-click="handleClick">
    <v-tab-pane label="处理中心" name="first"></v-tab-pane>
    <v-tab-pane name="second">   
        <v-dropdown hoverTrigger>
          <span class="v-dropdown-link" @click.stop>
            下拉菜单<i class="iconfont icon-down"></i>
          </span>
          <v-dropdown-menu slot="dropdown">
            <v-dropdown-item>黄金糕</v-dropdown-item>
            <v-dropdown-item>狮子头</v-dropdown-item>
            <v-dropdown-item>螺蛳粉</v-dropdown-item>
            <v-dropdown-item disabled>双皮奶</v-dropdown-item>
            <v-dropdown-item divided>蚵仔煎</v-dropdown-item>
          </v-dropdown-menu>
        </v-dropdown> 
    </v-tab-pane>
    <v-tab-pane label="消息中心" name="third" disabled></v-tab-pane>
    <v-tab-pane name="forth"><div @click="openBaidu">百度</div></v-tab-pane>
  </v-tabs>

</div>
</template>
<script>
export default {
  data(){
    return {
        activeName: 'second'
    }
  },
  methods:{
      handleClick(instance, event) {
        console.log(instance, event);
      },
      openBaidu(){
        window.open("https://www.baidu.com");
      }
  }
}
</script>
<style scoped>
    
    .bc{
        position: relative;
        width: 700px;
        height: 300px;
        border: 1px solid gray;
    }
   
</style>

```
:::


