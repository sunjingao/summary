#### 基础用法

基础用法

:::demo 基础用法
```html
<template>
    <div class="demo-image">
      <div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <v-image
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit"
          ></v-image>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
</style>
```
:::
