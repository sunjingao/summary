#### 内置方法

内置 clear，select，focus，blur 等方法供外部调用

:::demo select 使用示例
```html
<template>

<div>

    <v-input ref="input" placeholder="请输入数据" v-model="inputValue">
    </v-input>
    
    <v-button type="primary" @click.native="select">点击调用内置select方法</v-button>
</div>

</template>
<script>

export default {
  data(){
    return {
      inputValue:'测试内容'
    }
  },
  methods:{
    select(){
      this.$refs.input.select();
    }
  },
  watch: {
    inputValue(val) {
      console.log(val);
    }
  }
}
</script>
```
:::


