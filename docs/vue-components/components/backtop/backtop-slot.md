#### 基础用法

基础用法

:::demo 基础用法
```html
<template>
    <div>
      Scroll down to see the bottom-right button.
      <v-backtop selector=".main-wrapper-container" :bottom="260" @click="click">
          <div
           style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
              }"
          >UP</div>
      </v-backtop>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    click(event) {
      console.log('click:', event);
    }
  }
}
</script>
```
:::
