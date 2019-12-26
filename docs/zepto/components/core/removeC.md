#### remove

remove() 

从其父节点中删除当前集合中的元素，有效的从dom中移除。

:::demo 基本用法
```html
<template>

    <p class="removeC1">Hello</p> 
    <div>how are</div>
    <p class="removeC1">you?</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $('.removeC1').remove();
    }
  }
}
</script>
```
:::
