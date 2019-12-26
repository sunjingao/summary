#### 回调

通过回调完善展示

:::demo 设置相关回调
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
            <v-dropdown-item command="d" disabled>双皮奶</v-dropdown-item>
            <v-dropdown-item command="e" divided>蚵仔煎</v-dropdown-item>
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
      const message = this.$message({
         title: '这是一条消息提示'
      });
      message.open();
      console.log('command:', command, 'event:', event);
    },
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


