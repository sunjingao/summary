#### 占位内容

定义加载中展示的内容及加载失败展示的内容

:::demo 设置alt定义加载中展示的内容，设置error属性或设置error插槽定义加载失败展示的内容
```html
<template>
    <div class="demo-image">
      <div class="block">
        <span>文字</span>
        <v-image :src="src" alt="加载中" class="imageSize"></v-image>
      </div>
      <div class="block">
        <span>自定义</span>
        <v-image :src="src" style="width: 300px; height: 200px">
          <div slot="alt">
            加载中<span>...</span>
          </div>
        </v-image>
      </div>
    </div>
    
    <div class="demo-image mt60">
    
      <div class="block">
        <span>文字</span>
        <v-image error="加载失败" class="imageSize"></v-image>
      </div>
      <div class="block">
        <span>自定义内容</span>
        <v-image class="imageSize">
          <div slot="error">
            <i class="iconfont icon-error"></i>
          </div>
        </v-image>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods:{
  }
}
</script>
<style scoped>
.demo-image{
    display: flex;
    width: 1000px;
}

.block {
    flex: 1;
}

.block:not(:first-child){
    margin-left: 20px;
}

.imageSize {
    width: 300px; 
    height: 200px;
}

.mt60 {
    margin-top: 60px;
}

</style>
```
:::
