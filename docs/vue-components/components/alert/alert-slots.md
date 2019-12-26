#### 自定义展示内容

自定义展示内容

:::demo slot
```html
<template>

    <v-alert title="this is title" type="success" @close="close">
       <div slot="title">haha title</div>
       <div slot="description">haha description</div>
    </v-alert>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    close(event) {
      console.log(event);
    }
  }
}
</script>
```
:::


