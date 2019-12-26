#### 在局部内容中展示

通过局部容器滚动展示回到顶部按钮

:::demo 设置selector属性为选择器
```html
<template>

    <div id="test">
      <div class="testpart"></div>
    </div>
    
    <div>
        Scroll down to see the bottom-right button.
      <v-backtop selector="#test" :bottom="200" @click="click"></v-backtop>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    click(event) {
      console.log('click:', event);
    }
  }
}
</script>
<style scoped>
#test {
    width: 200px;
    height: 200px;
    border: 1px solid gray;
    overflow: auto
}

#test .testpart{
    width: 600px;
    height: 600px;
}
</style>
```
:::
