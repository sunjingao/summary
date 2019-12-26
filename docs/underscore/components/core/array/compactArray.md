#### compact

返回一个除去了所有假值的list副本。在javascript中,false,null,0,"",undefined和NaN都是假值。

:::demo 基本用法
```html
<template>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let res1 = _.compact([0, 1, false, 2, '', 3]),
        res2 = _.compact({val0: 0, val1: 1, val2: false, val3: 2, val4: '', val5: 3});
      console.log(res1);
      console.log(res2);
    }
  }
}
</script>
```
:::
