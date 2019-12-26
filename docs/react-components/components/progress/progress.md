## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。


### 线型进度条
线型进度条
:::demo 线型进度条
```js
format(val){
  return '满';
}

render() {
  return (
    <div>
      <Progress percentage={50}/>
      <Progress percentage={99}/>
      <Progress percentage={100} format={this.format}/>
    </div>
  );
}
```
:::


### 百分比内显
百分比显示在进度条右侧
:::demo 设置 textInside 属性
```js
render() {
  return (
    <div>
      <Progress textInside={true} spacing={26} percentage={70} />
      <Progress textInside={true} spacing={24} percentage={100} />
    </div>
  )
}
```
:::


### 自定义描述
自定义描述内容
:::demo 使用 textComponent 插槽
```js
render() {
  return (
    <Progress textInside={true} spacing={26} percentage={70} textComponent={<div>自定义</div>}/> 
  )
}
```
:::


### 线条颜色
自定义线条颜色
:::demo 设置 bgColor 控制进度条颜色
```js
constructor(props) {
  super(props);
  this.state = {
    percentage: 20,
    customColor: '#409eff',
    customColors: [
      {bgColor: '#f56c6c', percentage: 20},
      {bgColor: '#e6a23c', percentage: 40},
      {bgColor: '#5cb87a', percentage: 60},
      {bgColor: '#1989fa', percentage: 80},
      {bgColor: '#6f7ad3', percentage: 100}
    ]
  };
}

customColorMethod(percentage) {
  if (percentage < 30) {
    return '#909399';
  } else if (percentage < 70) {
    return '#e6a23c';
  } else {
    return '#67c23a';
  }
}

decrease() {
  let percentage = this.state.percentage - 10;
  if (percentage < 0) {
    percentage = 0;
  }
  this.setState({
    percentage: percentage
  });
}

increase() {
  let percentage = this.state.percentage + 10;
  if (percentage > 100) {
    percentage = 100;
  }
  this.setState({
    percentage: percentage
  });
}

render() {
  
  return (
    <div>
    
        <Progress percentage={this.state.percentage} bgColor={this.state.customColor}/>

        <Progress percentage={this.state.percentage} bgColor={this.customColorMethod}/>

        <Progress percentage={this.state.percentage} bgColor={this.state.customColors}/>
    
        <div>
          <Button.Group>
            <Button onClick={this.decrease.bind(this)}>-</Button>
            <Button onClick={this.increase.bind(this)}>+</Button>
          </Button.Group>
        </div>
    </div>
  )
}
```
:::


### 环形进度条
以环形方式展示进度
:::demo 设置 type="circle"
```js
render() {
  return (
    <div>
        <Progress type="circle" percentage={0} class="circle" />
        <Progress type="circle" percentage={10} class="circle" />
        <Progress type="circle" percentage={25} class="circle" />
        <Progress type="circle" percentage={35} class="circle" />
        <Progress type="circle" percentage={50} class="circle" />
        <Progress type="circle" percentage={65} class="circle" />
        <Progress type="circle" percentage={75} class="circle" />
        <Progress type="circle" percentage={85} class="circle" />
        <Progress type="circle" percentage={100} class="circle" />
    </div>
  )
}
```
:::


### API

**Progress props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 进度条类型 | line/circle | - | line |
| percentage | 当前进度 | Number | 必填项 | 0 |
| width | 线性和圆的进度条的间距 | Number| - | 400 |
| spacing | 间距 | Number | - | 6 |
| format | 自定义展示内容函数 | function | - | - |
| textWidth | 线性进度条的描述内容宽度 | Number | - | 30 |
| textInside | 线性滚动条的描述内容是否在内部 | boolean | - | - |
| bgColor | 选中时的背景颜色 | array、string、function | - | #409eff |
| diameter | 圆形进度条的半径 | Number | - | 150 |
| textComponent | 文字插槽内容 | Node | - | - |

