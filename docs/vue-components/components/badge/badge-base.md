#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <v-badge>
        <v-button>button</v-button>
    </v-badge>

    <v-badge :value="val">
        <v-button>button</v-button>
    </v-badge>
    
    <v-badge :value="val" iconClass="badge-test">
        <v-button>button</v-button>
    </v-badge>
</template>
<script>
export default {
  data(){
    return {
      val:'10'
    }
  },
  methods:{
  }
}
</script>
<style>
    .badge-test {
        background-color: blue !important;
    }
</style>
```
:::


