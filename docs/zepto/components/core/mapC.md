#### map

map(function(index, item){ ... })

遍历对象集合中的所有元素。通过遍历函数返回值形成一个新的集合对象。在遍历函数中this关键之指向当前循环的项（遍历函数中的第二个参数）。

遍历中返回 null和undefined，遍历将结束。

:::demo 基本用法
```html
<template>

    <p class="mapCP"><b>Values: </b></p>
    <form>
      <input class="mapCInput" type="text" name="name" value="John"/>
      <input class="mapCInput" type="text" name="password" value="password"/>
      <input class="mapCInput" type="text" name="url" value="http://ejohn.org/"/>
    </form>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
      click() {

          $(".mapCInput").map(function () {
            console.log($(this).val());
          })
      }
    }
}
</script>
```
:::
