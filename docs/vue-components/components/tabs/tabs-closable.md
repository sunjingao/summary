#### 关闭

允许关闭某个条目

:::demo 设置closable属性
```html
<template>
    <div class="bc">
      <v-tabs v-model="activeName" closable @tab-click="handleClick" @close="close">
        <v-tab-pane label="用户管理" name="first"></v-tab-pane>
        <v-tab-pane label="配置管理" name="second"></v-tab-pane>
        <v-tab-pane label="角色管理" name="third"></v-tab-pane>
        <v-tab-pane label="定时任务补偿" name="fourth"></v-tab-pane>
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
      },
      close(name, label, event) {
        console.log('close--','name:', name, 'label:', label, 'event:', event);
      },
  }
}
</script>
<style scoped>
    .bc {
        position: relative;
        width: 700px;
        height: 300px;
        border: 1px solid gray;
    }
</style>

```
:::


