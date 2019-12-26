#### 自定义标签展示

自定义标签展示

:::demo 使用默认插槽
```html
<template>

<div class="bc">

  <v-tabs v-model="activeName" @tab-click="handleClick">
    <v-tab-pane label="用户管理" name="first"><div>自定义用户</div></v-tab-pane>
    <v-tab-pane label="配置管理" name="second"><div>自定义配置</div></v-tab-pane>
    <v-tab-pane label="角色管理" name="third"><div>自定义角色</div></v-tab-pane>
    <v-tab-pane label="定时任务补偿" name="fourth"><div>自定义定时</div></v-tab-pane>
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
      handleClick(name, label, event) {
        console.log('name:', name, 'label:', label, 'event:', event);
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


