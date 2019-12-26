#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
    <div>
        <v-dropdown @command="command">
          <span class="v-dropdown-link">
            下拉菜单<i class="iconfont icon-down"></i>
          </span>
          <v-dropdown-menu slot="dropdown">
            <v-dropdown-item command="黄金糕">黄金糕</v-dropdown-item>
            <v-dropdown-item command="狮子头">狮子头</v-dropdown-item>
            <v-dropdown-item command="螺蛳粉">螺蛳粉</v-dropdown-item>
            <v-dropdown-item disabled command="双皮奶">双皮奶</v-dropdown-item>
            <v-dropdown-item divided command="蚵仔煎">蚵仔煎</v-dropdown-item>
          </v-dropdown-menu>
        </v-dropdown>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    command(command, event){
      console.log('command:', command, 'event:', event);
    }
  }
}
</script>
<style>
  .v-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>
```
:::


