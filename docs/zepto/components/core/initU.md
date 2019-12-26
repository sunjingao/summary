#### $.init

$()

通过css选择器、字符串节点、zepto对象、dom对象、dom对象数组、zepto对象创建一个zepto对象。

:::demo 基本用法
```html
<template>

    <div id="initUId"></div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let dom = $('#initUId');
      console.log(dom);
      dom.append($("<p>Hello</p>"));
      dom.append($("<p />", { text:"Hello", id:"greeting", css:{color:'red'} }));
    }
  }
}
</script>
```
:::
