#### filter

filter(selector) filter(function(item, index){ ... })

过滤对象集合，返回对象集合中满足css选择器的项。
如果参数为一个函数，函数返回有实际值得时候，元素才会被返回。在函数中， this
关键字指向当前的元素。 与此相反的功能，查看not。

:::demo 基本用法
```html
<template>

    <p class="filterC1">Hello</p><p>Hello Again</p><p class="filterC1 selected">And Again</p>
    <p class="filterC2"><ol><li>Hello</li></ol></p><p>How are you?</p>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      console.log(
        $("p.filterC1").filter(".selected")
      );
      console.log(
        $("p.filterC2").filter(function(index) {
          return this;
        })
      );
    }
  }
}
</script>
```
:::
