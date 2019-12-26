#### 展示标记

展示标记

:::demo 展示标记
```html
<template>

  <div class="block">
    <v-slider
      v-model="value"
      range
      :marks="marks"
      @change="change1"
    >
    </v-slider>
  </div>
</template>
<script>
export default {
  data(){
    return {
        value: 30,
        marks: [
          {left:'25%',value: '<span style="color:red;">25</span>'},
          {left:'60%',value: '<span style="color:pink;">60</span>'},
          {left:'85%',value: '<span style="color:blue;">85</span>'},
        ]
    }
  },
  methods:{
      change1(val){
        console.log('提交的内容:' + val);
      },
  }
}
</script>
```
:::


