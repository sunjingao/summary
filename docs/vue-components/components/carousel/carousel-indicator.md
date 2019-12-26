#### 指示器

控制指示器的位置

:::demo 设置 indicator 属性
```html
<template>

    <v-carousel class="border" indicator="outside" :init-index="1" @prev="prev" @next="next" @locate="locate">
      <v-carousel-item v-for="item in 3" :key="item">
        <h3 class="center">{{ item }}</h3>
      </v-carousel-item>
    </v-carousel>

</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    
    prev(index) {
      console.log('prev:', index);
    },
    
    next(index) {
      console.log('next:', index);
    },
    
    locate(index) {
      console.log('locate:', index);
    },
  },
}
</script>
<style scoped>
.border{
    border: 1px solid gray;
}

.center{
    text-align: center;
}
</style>
```
:::


