#### removeClass

removeClass([name]) 
removeClass(function(index, oldClassName){ ... })  

移除当前对象集合中所有元素的指定class。
如果没有指定name参数，将移出所有的class。多个class参数名称可以利用空格分隔。下例移除了两个class。

:::demo 基本用法
```html
<template>

    <div>
        <div class="taiyang yueliang" id="removeClassC1">111</div>
        <div class="yaotaiyang" id="check2">222</div>
    </div>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      console.log($("#removeClassC1").removeClass("taiyang yueliang"));
    }
  }
}
</script>
<style scoped>
.taiyang{
    font-size: 20px;
}

.yueliang {
    font-weight: bold;
}
</style>
```
:::
