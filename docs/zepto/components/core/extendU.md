#### $.extend

$.extend(target, [source, [source2, ...]])   ⇒ target
$.extend(true, target, [source, ...])

当第一个值为boolean时，代表是否为深拷贝，默认为false。 
否则第一个值代表目标对象，其余的为赋值对象。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let target = { one: 'patridge' },
        source = { two: 'turtle doves' };

      console.log($.extend(target, source));
      console.log($.extend(true, target, source));
    }
  }
}
</script>
```
:::
