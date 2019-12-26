#### 主题

可以设置深沉的主题背景

:::demo 设置theme
```html
<template>

    <div class="box">
        <v-tooltip class="item" content="Top Left 提示文字" placement="top-start">
          <v-button>上左</v-button>
        </v-tooltip>
        
        <v-tooltip class="item" theme="dark" content="Top Left 提示文字" placement="top-start">
          <v-button>上左</v-button>
        </v-tooltip>
    </div>
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
    .item {
      margin: 4px;
    }
</style>
```
:::


