#### $.contains

$.contains(parent, node) 

检查parent节点中是否包含node节点。

:::demo 基本用法
```html
<template>
    
    <div class="contains"><div><div id="node"></div></div></div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log($.contains($('.contains').get(0), $('#node').get(0)));
    }
  }
}
</script>
```
:::
