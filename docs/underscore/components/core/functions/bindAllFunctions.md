#### bindAll

_.bindAll(object, *methodNames, context) 

给 object[methodNames] 绑定作用域context。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let buttonView = {
        label  : 'underscore',
        onClick: function(){ console.log(this); },
        onHover: function(){ console.log(this); }
      };
      
      _.bindAll(buttonView, 'onClick',{aa:111});
      
      let click = buttonView.onClick,
        hover = buttonView.onHover;
      
      click();
      hover();
    } 
  }
}
</script>
```
:::
