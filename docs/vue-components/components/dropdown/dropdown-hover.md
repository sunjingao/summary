#### 触发下拉方式

通过hover触发下拉

:::demo 设置hoverTrigger属性
```html
<template>
    <div>
        <v-dropdown hoverTrigger @command="command">
          <span class="v-dropdown-link">
            下拉菜单<i class="iconfont icon-down"></i>
          </span>
          <v-dropdown-menu slot="dropdown">
            <v-dropdown-item command="a">黄金糕</v-dropdown-item>
            <v-dropdown-item command="b">狮子头</v-dropdown-item>
            <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
            <v-dropdown-item disabled command="d">双皮奶</v-dropdown-item>
            <v-dropdown-item divided command="e">蚵仔煎</v-dropdown-item>
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


