## boundariesElement 

边界元素，可以是dom选择器，可以是dom对象，也可以是scrollParent，也可以是body（body一般都不会溢出），viewport:为documentElement。

:::demo 使用示例
```html 
<template>
                    
    指定边界
    <div class="v-scrollbar outer outer1">
        <br v-for="item in 50" />
        <div class="reference reference1">reference</div>
        <div class="popper popper1">popper</div>
        <br v-for="item in 50" />
    </div>

    不指定边界，默认为documentElement
    <div class="v-scrollbar outer outer2">
        <br v-for="item in 50" />
        <div class="reference reference2">reference</div>
        <div class="popper popper2">popper</div>
        <br v-for="item in 50" />
    </div>
    
    scrollParent
    <div class="v-scrollbar outer outer3">
        <br v-for="item in 50" />
        <div class="reference reference3">reference</div>
        <div class="popper popper3">popper</div>
        <br v-for="item in 50" />
    </div>
   
</template>
<script>

export default {
  
  data(){
    return {
        popperHandler1: null,
        popperHandler2: null,
        popperHandler3: null,
    }
  },
  
  methods: {
    
    initPopper1() {

      let reference = this.$el.querySelector('.reference1'),
       popper = this.$el.querySelector('.popper1');
   
      this.popperHandler1 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer1'),
        }
      );
    },
    
    initPopper2() {

      let reference = this.$el.querySelector('.reference2'),
       popper = this.$el.querySelector('.popper2');
   
      this.popperHandler2 = new Popper(
        reference,
        popper,
      );
    },
    
    initPopper3() {

      let reference = this.$el.querySelector('.reference3'),
       popper = this.$el.querySelector('.popper3');
   
      this.popperHandler3 = new Popper(
        reference,
        popper,
        {
            boundariesElement: 'scrollParent'
        }
      );
    },
  },
  
  mounted() {
    
    let outer1 = this.$el.querySelector('.outer1'),
      outer2 = this.$el.querySelector('.outer2'),
      outer3 = this.$el.querySelector('.outer3');
    
    outer1.scrollTop = 700;
    outer2.scrollTop = 700;
    outer3.scrollTop = 700;

    this.initPopper1();
    this.initPopper2();
    this.initPopper3();
   
  },
  
  beforeDestroy() {
    this.popperHandler1.destroy();
    this.popperHandler2.destroy();
    this.popperHandler3.destroy();
  },
}
</script>
<style scoped>

.outer {
    position: relative;
    margin-bottom: 50px;
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





