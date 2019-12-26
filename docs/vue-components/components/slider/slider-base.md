#### 基本用法

基本用法

:::demo 基本用法
```html
<template>
<div class="block">
    <span class="demonstration">默认</span>
    <v-slider v-model="value1" @change="change1"></v-slider>
</div>
<div class="block">
    <span class="demonstration">自定义初始值</span>
    <v-slider v-model="value2" @change="change2"></v-slider>
</div>
<div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <v-slider v-model="value3" :show-tooltip="false" @change="change3"></v-slider>
</div>
<div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <v-slider v-model="value4" :format-tooltip="formatTooltip" @change="change4"></v-slider>
</div>
<div class="block">
    <span class="demonstration">禁用</span>
    <v-slider v-model="value5" disabled @change="change5"></v-slider>
</div>
</template>
<script>
export default {
  data(){
    return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
    }
  },
  methods:{
      formatTooltip(val) {
        return val / 100;
      },
      change1(val){
        console.log('提交的内容:' + val);
      },
      change2(val){
        console.log('提交的内容:' + val);
      },
      change3(val){
        console.log('提交的内容:' + val);
      },
      change4(val){
        console.log('提交的内容:' + val);
      },
      change5(val){
        console.log('提交的内容:' + val);
      },
  }
}
</script>
```
:::


