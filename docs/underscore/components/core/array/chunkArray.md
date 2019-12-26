#### chunk

_.chunk(array, length) 

将 array 分成多个数组，每个数组包含length 或更少的项。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let kindergarten = ["Tyrone", "Elie", "Aidan", "Sam", "Katrina", "Billie", "Little Timmy"],
        partners = _.chunk(kindergarten, 2);
      
      console.log(partners);
    }
  }
}
</script>
```
:::
