#### 支持前置和后置图片

通过插槽支持前后置图片  

:::demo 前后置插槽分别为 front，behind
```html
<template>
    <v-input placeholder="请输入数据" v-model="inputValue">
        <div slot="front" class="frontAndBehindImg"></div>
        <div slot="behind" class="frontAndBehindImg"></div>
    </v-input>
</template>
<script>
export default {
  data(){
    return {
      inputValue:''
    }
  },
  watch: {
    inputValue(val) {
      console.log(val);
    }
  }
}
</script>
<style scoped>
    .frontAndBehindImg {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: red;
        vertical-align: middle;
    }
</style>
```
:::


