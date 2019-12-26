#### allKeys

_.allKeys(object) 

将所有属性返回，包括自身和继承的。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      function Stooge(name) {
        this.name = name;
      }
      
      Stooge.prototype.silly = true;
      console.log(_.allKeys(new Stooge("Moe")));
    }
  }
}
</script>
```
:::
