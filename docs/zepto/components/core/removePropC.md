#### removeProp

removeProp(name)  

从集合的每个DOM节点中删除一个属性。
这是用JavaScript的delete操作符完成。
值得注意的是如果尝试删除DOM的一些内置属性，如className或maxLength，将不会有任何效果，因为浏览器禁止删除这些属性。

:::demo 基本用法
```html
<template>

    <div>
        <input class="removePropC" :disabled="false" />
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {

      let $para = $(".removePropC");
      $para.prop("disabled", true);
      
      
      setTimeout(
        _=>{
          $para.removeProp("disabled");
        },
        2000
      )
    }
  }
}
</script>
```
:::
