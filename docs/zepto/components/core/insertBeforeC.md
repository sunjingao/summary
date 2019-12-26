#### insertBefore

insertBefore(target) 

将集合中的元素插入到指定的目标元素前面（注：外部插入）。这个有点像 before，但是使用方式相反。

:::demo 基本用法
```html
<template>

    <div class="insertBeforeC" id="foo">Hello</div><p class="insertBeforeCP">I would like to say: </p>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $(".insertBeforeCP").insertBefore(".insertBeforeC");
    }
  }
}
</script>
```
:::
