#### mixin

_.mixin(object) 

扩展underscore中的内容。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      _.mixin({
        capitalize: function(string) {
          return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
        }
      });
      console.log(_("fabio").capitalize());
    }
  }
}
</script>
```
:::
