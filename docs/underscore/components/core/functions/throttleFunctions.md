#### throttle

_.throttle(function, wait) 

节流函数，wait世间内，最多执行一次function。

:::demo 基本用法
```html
<template>
    <v-button @click="add">add throttle</v-button>
    <v-button @click="remove">remove throttle</v-button>
</template>
<script>
export default {
  data(){
    return {
      throttle: null,
      hasAddEvent: false,
    }
  },
  methods: {
    
    addListener() {
      document.querySelector('.main-wrapper-container').addEventListener('scroll', this.throttle);
    },
    
    removeListener() {
      document.querySelector('.main-wrapper-container').removeEventListener('scroll', this.throttle);
    },
    
    add() {
      
      if(this.hasAddEvent){
        return;
      }
      
      this.hasAddEvent = true;
      
      let updatePosition = function() {
        console.log(111);
      };
      this.throttle = _.throttle(updatePosition, 1000);
      
      this.addListener();
    },
    
    remove(){
      this.hasAddEvent = false;
      this.removeListener();
    },
  },
  
  beforeDestroy(){
    this.removeListener();
  }
}
</script>
```
:::
