#### push

push(element, [element2, ...])

添加元素到当前对象集合的最后。

:::demo 基本用法
```html
<template>

    <div class="pushC1">C1</div>
    <div class="pushC2">C2</div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($('.pushC1').push($('.pushC2')[0]));
    }
  }
}
</script>
```
:::
