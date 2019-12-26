#### scrollTop

scrollTop()   
scrollTop(value) 

获取或设置页面上的滚动元素或者整个窗口向下滚动的像素值。

:::demo 基本用法
```html
<template>

    <div class="scrollTop1">
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
    </div>
    <p class="scrollTop2">2nd Paragraph</p>
    
    <div class="scrollTop3">
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
        <div>111111111111111111111111111111</div>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let p = $(".scrollTop1");
      console.log(p.scrollTop());
      $(".scrollTop2").text( "scrollTop:" + p.scrollTop());
      
      $(".scrollTop3").scrollTop(300);
    }
  }
}
</script>
<style scoped>
.scrollTop1 {
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    overflow: auto;
}

.scrollTop3 {
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    overflow: auto;
}
</style>
```
:::
