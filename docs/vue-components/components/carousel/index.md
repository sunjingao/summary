## Carousel 走马灯

Carousel 走马灯

:::demo 
```html
<template>

    <carouselBase></carouselBase>
    <carouselIndicator></carouselIndicator>
    <carouselArrow></carouselArrow>
</template>
<script>

import carouselBase from './carousel-base.md';
import carouselIndicator from './carousel-indicator.md';
import carouselArrow from './carousel-arrow.md';

export default {
  data(){
    return {
    }
  },
  components:{
    carouselBase,
    carouselIndicator,
    carouselArrow,
  }
}
</script>
```
:::



#### API

**carousel props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| initIndex | 初始索引 | number | - | 0 |
| height | 高度 | number | - | 300 |
| trigger | 指示器触发方式 | string | hover/click | hover |
| autoplay | 是否自动切换 | boolean | - | true |
| interval | 切换事件 | number | - | 2000 |
| transition | 动画完成时间 | number | - | 500 |
| indicator | 指示器位置 | string | outside/inside/none | inside |
| arrow | 箭头切换方式 | string | 'always', 'hover', 'never' | hover |

**carousel Event**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| prev | 点击上一张幻灯片 | index |
| next | 点击下一张幻灯片 | index |
| locate | 指示器触发 | index |




