## flip 

popper改变方向规律：opposite：相反方向、clockwise：顺时针、counterclockwise：逆时针、static：固定位置，不变换。


:::demo 使用示例
```html 
<template>

    opposite：相反方向更新
    <div class="v-scrollbar outer outer1 mb30">
        <br v-for="item in 50" />
        <div class="reference reference1">reference</div>
        <div class="popper popper1">popper</div>
        <br v-for="item in 50" />
    </div>
    
    clockwise：顺时针方向更新
    <div class="v-scrollbar outer outer2 mb30">
        <br v-for="item in 50" />
        <div class="reference reference2">reference</div>
        <div class="popper popper2">popper</div>
        <br v-for="item in 50" />
    </div>
    
    counterclockwise：逆时针方向更新
    <div class="v-scrollbar outer outer3 mb30">
        <br v-for="item in 50" />
        <div class="reference reference3">reference</div>
        <div class="popper popper3">popper</div>
        <br v-for="item in 50" />
    </div>
    
    static：固定位置，不变换
    <div class="v-scrollbar outer outer4 mb30">
        <br v-for="item in 50" />
        <div class="reference reference4">reference</div>
        <div class="popper popper4">popper</div>
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
        popperHandler4: null,
    }
  },
  
  methods: {
    
    locate1() {
      
      let outer = this.$el.querySelector('.outer1');
     outer.scrollLeft = 350;
      outer.scrollTop = 700;
      this.initPopper1();
    },
    
    locate2() {
      
      let outer = this.$el.querySelector('.outer2');
      outer.scrollLeft = 350;
      outer.scrollTop = 700;
      this.initPopper2();
    },
    
    locate3() {
            
      let outer = this.$el.querySelector('.outer3');
     outer.scrollLeft = 350;
      outer.scrollTop = 700;
      this.initPopper3();
    },
    
    locate4() {
            
      let outer = this.$el.querySelector('.outer4');
     outer.scrollLeft = 350;
      outer.scrollTop = 700;
      this.initPopper4();
    },
    
    initPopper1() {

      let reference = this.$el.querySelector('.reference1'),
       popper = this.$el.querySelector('.popper1');
   
      this.popperHandler1 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer1'),
          flip: 'opposite',
        }
      );
    },
    
    initPopper2() {

      let reference = this.$el.querySelector('.reference2'),
       popper = this.$el.querySelector('.popper2');
   
      this.popperHandler2 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer2'),
          flip: 'clockwise',
        }
      );
    },
    
    initPopper3() {

      let reference = this.$el.querySelector('.reference3'),
       popper = this.$el.querySelector('.popper3');
   
      this.popperHandler3 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer3'),
          flip: 'counterclockwise',
        }
      );
    },
    
    initPopper4() {

      let reference = this.$el.querySelector('.reference4'),
       popper = this.$el.querySelector('.popper4');
   
      this.popperHandler4 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer4'),
          flip: 'static',
        }
      );
    },
  },
  
  mounted() {
    
    this.locate1();
    this.locate2();
    this.locate3();
    this.locate4();
  },
  
  beforeDestroy() {
    this.popperHandler1.destroy();
    this.popperHandler2.destroy();
    this.popperHandler3.destroy();
    this.popperHandler4.destroy();
  },
}
</script>
<style scoped>

.mb30 {
    margin-bottom: 30px;
}

.outer {
    position: relative;
    width: 600px;
    height: 600px;
    border: 1px solid gray;
    overflow: auto;
}

.reference {
    display: inline-block;
    margin: 0 600px;
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





