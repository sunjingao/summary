## methods 

options methods 使用展示。

:::demo 使用示例
```html 
<template>
    
    show and hide
    <div class="v-scrollbar outer1 outer">
        <br v-for="item in 50" />
        <div class="reference reference1">reference</div>
        <div class="popper popper1">popper</div>
        <br v-for="item in 50" />
    </div>
    <v-button class="mt10" @click="show">点击展示popper</v-button>
    <v-button class="mt10" @click="hide">点击隐藏popper</v-button>
    
    <div class='mt50'></div>
    
    enableEventListeners and removeEventListeners
    <div class="v-scrollbar outer2 outer">
        <br v-for="item in 50" />
        <div class="reference reference2">reference</div>
        <div class="popper popper2">popper</div>
        <br v-for="item in 50" />
    </div>
    <v-button class="mt10" @click="enablePopperListeners">更新并增加绑定事件</v-button>
    <v-button class="mt10" @click="removePopperListeners">删除绑定事件</v-button>
    
    <div class='mt50'></div>
    
     <v-button class="mt10" @click="getZIndex">show zIndex in log</v-button>
    <v-button class="mt10" @click="addZIndex">add zIndex</v-button>
    
</template>
<script>

export default {
  
  data(){
    return {
        popperHandler1: null,
        popperHandler2: null,
    }
  },
  
  methods: {
    
    show() {
        this.popperHandler1.show();
    },
    
    hide() {
        this.popperHandler1.hide();
    },
    
    initPlace1() {
        let outer = this.$el.querySelector('.outer1');
        outer.scrollTop = 700;
    },
    
    initPlace2() {
        let outer = this.$el.querySelector('.outer2');
        outer.scrollTop = 700;
    },
    
    initPopper1() {

      let reference = this.$el.querySelector('.reference1'),
       popper = this.$el.querySelector('.popper1');
   
      this.popperHandler1 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer1'),
          updateImmediately: false,
        }
      );
      
      this.hide();
    },
    
    initPopper2() {

      let reference = this.$el.querySelector('.reference2'),
       popper = this.$el.querySelector('.popper2');
   
      this.popperHandler2 = new Popper(
        reference,
        popper,
        {
          boundariesElement: this.$el.querySelector('.outer2'),
          updateImmediately: false,
        }
      );
    },
    
    enablePopperListeners() {
        this.popperHandler2.update();
        this.popperHandler2.enableEventListeners();
    },
    
    removePopperListeners() {
        this.popperHandler2.removeEventListeners();
    },
    
    addZIndex() {
        Popper.addZIndex();
    },        
    
    getZIndex() {
        console.log(Popper.getZIndex())
    },    
  },
  
  mounted() {
    
    this.initPlace1();
    this.initPlace2();
    
    this.initPopper1();
    this.initPopper2();
  },
  
  beforeDestroy() {
    this.popperHandler1.destroy();
    this.popperHandler2.destroy();
  },
}
</script>
<style scoped>

.mt50 {
    margin-top: 50px;
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





