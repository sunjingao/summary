## Slider 滑块

通过拖动滑块在一个固定区间内进行选择。


### 基本用法
基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    value1: 0,
    value2: 50,
    value3: 36,
    value4: 48,
    value5: 42
  };
}

formatTooltip(val) {
  return val / 100;
}

change1(val){
  console.log('提交的内容:' + val);
}

change2(val){
  console.log('提交的内容:' + val);
}

change3(val){
  console.log('提交的内容:' + val);
}

change4(val){
  console.log('提交的内容:' + val);
}

change5(val){
  console.log('提交的内容:' + val);
}

render() {
  return (
    <div>
      <div>
        <span className="demonstration">默认</span>
        <Slider value={this.state.value1} onChange={this.change1}/>
      </div>
      <div>
        <span className="demonstration">自定义初始值</span>
        <Slider value={this.state.value2} onChange={this.change2}/>
      </div>
      <div>
        <span className="demonstration">隐藏 Tooltip</span>
        <Slider value={this.state.value3} isShowTooltip={false} onChange={this.change3}/>
      </div>
      <div>
        <span className="demonstration">格式化 Tooltip</span>
        <Slider value={this.state.value4} formatTooltip={this.formatTooltip} onChange={this.change4}/>
      </div>
      <div>
        <span className="demonstration">禁用</span>
        <Slider value="value5" isDisabled onChange={this.change5} />
      </div>
    </div>
  )
}
```
:::


### 离散值
离散值
:::demo 设置step
```js
constructor(props) {
  super(props);
  this.state = {
    value1: 0,
    value2: 0
  }
}

change1(val){
  console.log('提交的内容:' + val);
}

change2(val){
  console.log('提交的内容:' + val);
}

render() {
  return (
    <div>
      <div>
        <span className="demonstration">不显示间断点</span>
        <Slider
          value={this.state.value1}
          step={10}
          onChange={this.change1}
        />
      </div>
      <div>
        <span className="demonstration">显示间断点</span>
        <Slider
          value={this.state.value2}
          step={10}
          isShowStops
          onChange={this.change2}
        />
      </div>
    </div>
  )
}
```
:::


### 展示标记
展示标记
:::demo 设置marks属性
```js
constructor(props) {
  super(props);
  this.state = {
    value: 30,
    marks: [
      {left:'25%',value: '<span style="color:red;">25</span>'},
      {left:'60%',value: '<span style="color:pink;">60</span>'},
      {left:'85%',value: '<span style="color:blue;">85</span>'},
    ]
  }
}

change1(val){
  console.log('提交的内容:' + val);
}

render() {
  return (
    <div className="block">
      <Slider
        range
        value={this.state.value}
        marks={this.state.marks}
        onChange={this.change1}
      />
    </div>
  )
}
```
:::


### API

**Slider props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 初始值 | number/string | - | 0 |
| isDisabled | 禁止操作 | boolean | - | - |
| isShowTooltip | 是否展示tooltip | boolean | - | true |
| isShowStops | 将每点展示出来 | boolean | - | - |
| min | 最小值 | number | - | 0 |
| max | 最大值 | number | - | 100 |
| step | 间距 | number | - | 1 |
| formatTooltip | tooltip内容自定义 | function | - | - |
| marks | tooltip自定义 | array | - | [] |


**Slider Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 点击或滑动结束后触发 | 当前百分数 |


