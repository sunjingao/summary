#### 居中布局

标题和footer部分可居中对局

:::demo 设置center属性
```html
<template>

    <v-dialog title="this is title" v-model="visible" center width="300">
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


