#### not

not(selector) 
not(collection)  
not(function(index){ ... }) 

与它相反的功能，查看 filter。

:::demo 基本用法
```html
<template>

    <p class="notC">Hello</p>
    <p class="notC selected">Hello Again</p>

    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {

      console.log( $(".notC").not($(".notC.selected")[0]) );
    }
  }
}
</script>
```
:::
