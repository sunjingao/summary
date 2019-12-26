#### 按钮集

按钮集合操作，分为横向 和 纵向

:::demo type：horizontal（横向） vertical（纵向）
```html
<template>
    <v-button-group>
        <v-button @click="click">
            按钮
        </v-button>
        <v-button type="primary" @click="click">
            按钮
        </v-button>
    </v-button-group>
    
     <v-button-group type="vertical">
        <v-button @click="click">
            按钮
        </v-button>
        <v-button type="primary" @click="click">
            按钮
        </v-button>
    </v-button-group>
</template>
<script>
export default {
  methods:{
    click() {
      console.log('click')
    }
  }
}
</script>
```
:::


