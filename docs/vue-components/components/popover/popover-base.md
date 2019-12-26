#### 基本用法

基本用法

:::demo 基本用法
```html
<template>

    <v-popover class="item" content="this is hover content" placement="bottom-start">
      <v-button>hover</v-button>
    </v-popover>
    
    <v-popover class="item" content="this is focus content" placement="bottom-start" trigger="focus">
      <v-button>focus</v-button>
    </v-popover>
    
    <v-popover class="item" content="this is click content" placement="bottom-start" trigger="click">
      <v-button>click</v-button>
    </v-popover>
    
    <v-popover class="item" content="this is manual content" placement="bottom-start" trigger="manual">
      <v-button>manual</v-button>
    </v-popover>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
  },
}
</script>
<style scoped>
    .item {
      margin: 4px;
    }
</style>
```
:::


