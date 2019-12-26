#### prop

prop(name)
prop(name, value)
prop(name, function(index, oldValue){ ... })  

读取或设置dom元素的属性值。它在读取属性值的情况下优先于 attr，因为这些属性值会因为用户的交互发生改变，如checked 和 selected。
简写或小写名称，比如for, class, readonly及类似的属性，将被映射到实际的属性上，比如htmlFor, className, readOnly, 等等。

:::demo 基本用法
```html
<template>

    <input type="checkbox" class="propC propC1" />
    <input type="checkbox" class="propC propC2" checked disabled/>
    <input type="checkbox" class="propC propC3" checked disabled/>
    <br />
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log( $(".propC2").prop("checked") );
      $(".propC2").prop("disabled", false);
      $(".propC3").prop("disabled", function(index, oldValue) {
        return false;
      });
    }
  }
}
</script>
```
:::
