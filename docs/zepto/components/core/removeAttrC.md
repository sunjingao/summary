#### removeAttr

removeAttr(name) 

移除当前对象集合中所有元素的指定属性。

:::demo 基本用法
```html
<template>

    <div class="removeAttrC" src="test.jpg">11111</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(
        $(".removeAttrC").removeAttr("src")
      );
    }
  }
}
</script>
```
:::
