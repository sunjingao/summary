#### 按钮的其它属性

按钮的其它属性

:::demo 设置宽高等属性
```html
<template>
    <div>
        <v-dropdown splitButton type="primary" :width="100" :height="60" @command="command" @click="click">
          <span>
            下拉菜单
          </span>
          <v-dropdown-menu slot="dropdown">
            <v-dropdown-item command="a">黄金糕</v-dropdown-item>
            <v-dropdown-item command="b">狮子头</v-dropdown-item>
            <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
            <v-dropdown-item disabled command="d">双皮奶</v-dropdown-item>
            <v-dropdown-item divided command="e">蚵仔煎</v-dropdown-item>
          </v-dropdown-menu>
        </v-dropdown>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    
    click(event) {
      console.log('click:', event);
    },
    
    command(command, event){
      console.log('command:', command, 'event:', event);
    }
  }
}
</script>
```
:::


