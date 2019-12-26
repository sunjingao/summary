#### 嵌套

打开对话框后，点击嵌套按钮，可以打开新的对话框。

:::demo 嵌套
```html
<template>

    <v-dialog title="222222222" v-model="nest" width="500">
        <div style="height: 500px">这是嵌套内容</div>
        <span slot="footer">
          <v-button @click="nest=false">取 消</v-button>
          <v-button type="primary" @click="nest=false">确 定</v-button>
        </span>
    </v-dialog>

    <v-dialog title="this is title" v-model="visible" center width="300">
        <div style="">这是一段信息</div>
        <span slot="footer">
          <v-button @click="visible=false">取 消</v-button>
          <v-button type="primary" @click="nest=true">嵌 套</v-button>
        </span>
    </v-dialog>
    <v-button @click="open">open</v-button>
</template>
<script>
export default {
  data(){
    return {
      nest:false,
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


