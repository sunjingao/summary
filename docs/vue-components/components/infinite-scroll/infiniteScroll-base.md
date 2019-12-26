#### 基础用法

基础用法

:::demo 基础用法
```html
<template>
<div class="infinite-list" v-infinite-scroll="load">
  <ul class="infinite-ul">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
    <div class="infinite-footer">
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
     count: 10,
     loading: false,
     noMore: false,
    }
  },
  methods:{
      load (cb) {
        
        this.loading = true;
        setTimeout(
          _=> {
            this.loading = false;
            if(this.count === 20){
              cb();
              this.noMore = true;
              return;
            }            
            this.count += 2;
          },
          2000
        )
      }
  }
}
</script>
<style scoped>
.infinite-list{
    border: 1px solid gray;
    width: 100%;
    height: 300px;
    overflow: auto;
}

.infinite-ul {
    list-style-type: none;
}

.infinite-list-item{
    width: 80%;
    height: 100px;
    line-height: 100px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
}

.infinite-footer {
    margin: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #5e6d82;
    text-align: center;
}
</style>
```
:::