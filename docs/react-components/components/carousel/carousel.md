## Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。


### 基本用法
基本用法
:::demo 基本用法
```js
prev(index) {
  console.log('prev:', index);
}

next(index) {
  console.log('next:', index);
}

locate(index) {
  console.log('locate:', index);
}

render() {
  
  let children = [
      <Carousel.Item key={11}>
        <h3 className="center">11</h3>
      </Carousel.Item>,
      <Carousel.Item key={22}>
        <h3 className="center">22</h3>
      </Carousel.Item>,
      <Carousel.Item key={33}>
        <h3 className="center">33</h3>
      </Carousel.Item>,
  ];
  
  return (
    <Carousel 
      className="border" 
      onPrev={this.prev} 
      onNext={this.next} 
      onLocate={this.locate}
    >
      {children}
    </Carousel>
  )
}
```
:::


### 指示器
控制指示器的位置
:::demo 设置 indicator 属性
```js
prev(index) {
  console.log('prev:', index);
}

next(index) {
  console.log('next:', index);
}

locate(index) {
  console.log('locate:', index);
}

render() {
  
  let children = [
    <Carousel.Item key={11}>
        <h3 className="center">11</h3>
    </Carousel.Item>,
    <Carousel.Item key={22}>
        <h3 className="center">22</h3>
    </Carousel.Item>,
    <Carousel.Item key={33}>
        <h3 className="center">33</h3>
    </Carousel.Item>,
  ];
  
  return (
    <Carousel 
      className="border" 
      indicator="outside" 
      initIndex={1} 
      onPrev={this.prev} 
      onNext={this.next} 
      onLocate={this.locate}
    >
      {children}
    </Carousel>
  );
}
```
:::


### 箭头展示时机
指定箭头的展示时机
:::demo arrow 分为'always', 'hover', 'never'
```js
prev(index) {
  console.log('prev:', index);
}

next(index) {
  console.log('next:', index);
}

locate(index) {
  console.log('locate:', index);
}

render() {
  
  let children = [
    <Carousel.Item key={11}>
      <h3  className="center">11</h3>
    </Carousel.Item>,
    <Carousel.Item key={22}>
      <h3  className="center">22</h3>
    </Carousel.Item>,
    <Carousel.Item key={33}>
      <h3  className="center">33</h3>
    </Carousel.Item>,
  ];
  
  return (
    <Carousel 
      className="border" 
      arrow="always" 
      onPrev={this.prev} 
      onNext={this.next} 
      onLocate={this.locate}
    >
      {children}
    </Carousel>
  )
}
```
:::


### API

**Carousel props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isAutoplay | 是否自动切换 | boolean | - | true |
| initIndex | 初始索引 | number | - | 0 |
| height | 高度 | number | - | 300 |
| trigger | 指示器触发方式 | string | hover/click | hover |
| interval | 切换时间 | number | - | 2000 |
| transition | 动画完成时间 | number | - | 500 |
| indicator | 指示器位置 | string | outside/inside/none | inside |
| arrow | 箭头切换方式 | string | 'always', 'hover', 'never' | hover |

**Carousel Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onPrev | 点击上一张幻灯片 | 索引 |
| onNext | 点击下一张幻灯片 | 索引 |
| onLocate | 指示器触发 | 索引 |
