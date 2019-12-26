#### 位置

展示方位控制

:::demo 设置position属性
```html
<template>

    <div class="bc">
      <v-tabs v-model="activeName" :position="position" @tab-click="handleClick">
        <v-tab-pane label="用户管理" name="first"></v-tab-pane>
        <v-tab-pane label="配置管理" name="second"></v-tab-pane>
        <v-tab-pane label="角色管理" name="third"></v-tab-pane>
        <v-tab-pane label="定时任务补偿" name="fourth"></v-tab-pane>
      </v-tabs>
      <div class="tabs-position-content">
        <v-button @click.native="position='top'">上</v-button>
        <v-button @click.native="position='right'">右</v-button>
        <v-button @click.native="position='bottom'">下</v-button>
        <v-button @click.native="position='left'">左</v-button>
      </div>  
    </div>

    <div class="bc tabs-position-mt10">
    
      <v-tabs v-model="activeName" :position="position" @tab-click="handleClick" type="card">
        <v-tab-pane label="用户管理" name="first"></v-tab-pane>
        <v-tab-pane label="配置管理" name="second"></v-tab-pane>
        <v-tab-pane label="角色管理" name="third"></v-tab-pane>
        <v-tab-pane label="定时任务补偿" name="fourth"></v-tab-pane>
      </v-tabs>
      <div class="tabs-position-content">
        <v-button @click.native="position='top'">上</v-button>
        <v-button @click.native="position='right'">右</v-button>
        <v-button @click.native="position='bottom'">下</v-button>
        <v-button @click.native="position='left'">左</v-button>
      </div>  
    </div>
</template>
<script>
export default {
  data(){
    return {
        activeName: 'fourth',
        position:'top'
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
    
    .tabs-position-mt10 {
        margin-top: 10px
    }
    
    .tabs-position-content {
        margin-top: 50px;
        margin-left: 180px;
    }
</style>
```
:::


