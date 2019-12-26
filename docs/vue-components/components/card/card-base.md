#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <v-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <v-link style="float: right; padding: 3px 0" :underline="false" type="primary">
            操作按钮
        </v-link>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
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
  },
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::


