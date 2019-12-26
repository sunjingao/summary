#### prependTo

prependTo(target) 

将所有元素插入到目标前面（注：元素内部插入）。这有点像prepend，但是是相反的方式。

:::demo 基本用法
```html
<template>

    <div id="prependToCfoo">this is content</div>
    <p class="prependCP">I would like to say: </p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      $(".prependCP").prependTo("#prependToCfoo");
    }
  }
}
</script>
```
:::
