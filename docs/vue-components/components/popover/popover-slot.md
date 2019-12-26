#### 自定义展示

展示自定义内容

:::demo 设置popper插槽即可
```html
<template>

    <v-popover placement="bottom-start" trigger="hover">
      <div slot="popper">
        <div class="body">
             <div class="body-title">title</div>
             <div class="body-content">hover</div>  
        </div>
      </div>
      <v-button>hover</v-button>
    </v-popover>

    <v-popover placement="bottom-start" trigger="click">
      <div slot="popper">
        <div class="body">
             <div class="body-title">title</div>
             <div class="body-content">hover</div>  
        </div>
      </div>
      <v-button>click</v-button>
    </v-popover>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
  },
}
</script>
<style scoped>
    .body {
      width: 200px;
      height: 200px;
      overflow: auto;
    }
    
    .body-title{
        
    }
    
    .body-content{
        width: 500px;
    }
</style>
```
:::


