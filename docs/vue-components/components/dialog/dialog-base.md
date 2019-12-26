#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <v-dialog title="this is title" v-model="visible">
        <div style="">这是一段信息</div>
        <span slot="footer">
          <v-button @click="visible=false">取 消</v-button>
          <v-button type="primary" @click="visible=false">确 定</v-button>
        </span>
    </v-dialog>
    <v-button @click="open">open</v-button>
</template>
<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  methods:{
    open(){
      this.visible = true;
    },
  },
}
</script>
```
:::


