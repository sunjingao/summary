#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <v-carousel class="border" @prev="prev" @next="next" @locate="locate">
      <v-carousel-item v-for="item in 3" :key="item">
        <h3  class="center">{{ item }}</h3>
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


