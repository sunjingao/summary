#### 服务方式加载

以服务方式进行遮蔽罩操作，配置相关属性即可

:::demo 服务方式
```html
<template>

<div>
    <button class="loading-service" @click="openScreen1">点我开启局部loading</button>
    <button class="loading-service" @click="openScreen2">点我开启全局loading</button>
</div>
</template>
<script>
export default {
  data(){
    return {
        sign:false
    }
  },
  methods:{
    
      openScreen1(event) {

        const loading = this.$loading({
          target: event.target,
          text: 'Loading',
        });
        loading.open();

        setTimeout(() => {
          loading.close();
        }, 3000);
      },
      
      openScreen2(event) {

        const loading = this.$loading({
          target: document.body,
          text: 'Loading',
        });
        loading.open();

        setTimeout(() => {
          loading.close();
        }, 3000);
      },
  },    
}
</script>
<style scoped>
    .loading-service {
      width: 100px;
      height: 100px;
      padding: 10px;
      border: 5px solid gray;
    }
</style>
```
:::


