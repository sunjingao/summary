## onUpdate 

执行update时调用。

:::demo 使用示例
```html 
<template>
    <div class="v-scrollbar outer">
        <br v-for="item in 50" />
        <div class="reference">reference</div>
        <div class="popper">popper</div>
        <br v-for="item in 50" />
    </div>
</template>
<script>

export default {
  
  data(){
    return {
        popperHandler: null
    }
  },
  
  methods: {
    
    initPopper() {

      let reference = this.$el.querySelector('.reference'),
       popper = this.$el.querySelector('.popper');
   
      this.popperHandler = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer'),
          onUpdate() {
            console.log('this is in onUpdate');
          }
        }
      );
      
    }
  },
  
  mounted() {
    
    let outer = this.$el.querySelector('.outer');
    outer.scrollTop = 700;

    this.initPopper();
  },
  
  beforeDestroy() {
    this.popperHandler.destroy();
  },
}
</script>
<style scoped>

.outer {
    position: relative;
    width: 600px;
    height: 600px;
    border: 1px solid gray;
    overflow: auto;
}

.reference {
    display: inline-block;
    margin-left: 260px;
    width: 100px;
    height: 100px;
    border: 1px solid gray;
}

.popper {
    width: 60px;
    height: 60px;
    border: 1px solid gray;
}
</style>
```
:::





