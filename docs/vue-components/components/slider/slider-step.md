#### 离散值

离散值

:::demo 离散值
```html
<template>
<div class="block">
    <span class="demonstration">不显示间断点</span>
    <v-slider
      v-model="value1"
      :step="10"
      @change="change1"
    >
    </v-slider>
    </div>
    <div class="block">
    <span class="demonstration">显示间断点</span>
    <v-slider
      v-model="value2"
      :step="10"
      show-stops
      @change="change2"
    >
    </v-slider>
</div>
</template>
<script>
export default {
  data(){
    return {
        value1: 0,
        value2: 0
    }
  },
  methods:{
      change1(val){
        console.log('提交的内容:' + val);
      },
      change2(val){
        console.log('提交的内容:' + val);
      },
  }
}
</script>
```
:::


