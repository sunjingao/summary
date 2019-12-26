#### 最大值设置

超过最大值，使用+

:::demo 设置max值
```html
<template>
   <v-badge :value="val1" :max="9">
        <v-button>button</v-button>
    </v-badge>
    <v-badge :value="val2" :max="99">
        <v-button>button</v-button>
    </v-badge>
</template>
<script>
export default {
  data(){
    return {
      val1:'10',
      val2:'100',
    }
  },
  methods:{
  }
}
</script>
```
:::


