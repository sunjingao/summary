#### attr

attr(name) 
attr(name, value) 
attr(name, function(index,oldValue){ ... })
attr({ name: value, name2: value2, ... })

读取或设置dom的属性。
如果没有给定value参数，则读取对象集合中第一个元素的属性值。
当给定了value参数。则设置对象集合中所有元素的该属性的值。当value参数为null，那么这个属性将被移除(类似removeAttr)，多个属性可以通过对象键值对的方式进行设置。

要读取DOM的属性如 checked和selected, 使用 prop。

:::demo 基本用法
```html
<template>
    
    <div class="attrc" aaa="111" aaa1="222" aaa2="333" needtodelete="needtodelete">attrc dom</div>
    <v-button @click="click">click to show in console</v-button>
</template>
<script>
export default {
  methods: {
    click() {
      
      let ele = $('.attrc');
      console.log(ele.attr('aaa'));
      ele.attr('aaa1',2);
      ele.attr('aaa2',function(v1,v2) {
        return "3";
      });
      ele.attr({aaa3: 4,aaa4: 5});
      ele.attr('needtodelete',null);
    }
  }
}
</script>
```
:::
