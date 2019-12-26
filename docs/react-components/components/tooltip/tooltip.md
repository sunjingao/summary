## ToolTip 文字提示

常用于展示鼠标 hover 时的提示信息。


### 基本用法
基本用法
:::demo 
```js
render() {
  return (
    <div className="box">
    
      <div className="tooltip-top">
        <Tooltip className="item" content="Top Left 提示文字" placement="top-start"><Button>上左</Button></Tooltip>
        <Tooltip className="item" content="Top Center 提示文字" placement="top"><Button>上边</Button></Tooltip>
        <Tooltip className="item" content="Top Right 提示文字" placement="top-end"><Button>上右</Button></Tooltip>
      </div>
      <div className="tooltip-left">
        <Tooltip className="item" content="Left Top 提示文字" placement="left-start"><Button height={70}>左上</Button></Tooltip>
        <Tooltip className="item" content="Left Center 提示文字" placement="left"><Button height={70}>左边</Button></Tooltip>
        <Tooltip className="item" content="Left Bottom 提示文字" placement="left-end"><Button height={70}>左下</Button></Tooltip>
      </div>

      <div className="tooltip-right">
        <Tooltip className="item" content="Right Top 提示文字" placement="right-start"><Button height={70}>右上</Button></Tooltip>
        <Tooltip className="item" content="Right Center 提示文字" placement="right"><Button height={70}>右边</Button></Tooltip>
        <Tooltip className="item" content="Right Bottom 提示文字" placement="right-end"><Button height={70}>右下</Button></Tooltip>
      </div>
      <div className="tooltip-bottom">
        <Tooltip className="item" content="Bottom Left 提示文字" placement="bottom-start"><Button>下左</Button></Tooltip>
        <Tooltip className="item" content="Bottom Center 提示文字" placement="bottom"><Button>下边</Button></Tooltip>
        <Tooltip className="item" content="Bottom Right 提示文字" placement="bottom-end"><Button>下右</Button></Tooltip>
      </div>
    </div>
  )
}
```
:::


#### 主题
可以设置深沉的主题背景
:::demo 设置theme
```js
render() {
  return (
    <div className="box">
      <Tooltip className="item" content="Top Left 提示文字" placement="top-start"><Button>上左</Button></Tooltip>
      <Tooltip className="item" theme="dark" content="Top Left 提示文字" placement="top-start"><Button>上左</Button></Tooltip>
    </div>
  )
}
```
:::


### 自定义内容
自定义展示内容
:::demo 设置popperComponent插槽
```js
render() {
  return (
    <div className="box">
      <Tooltip content="Top Left 提示文字" placement="top-start" 
        popperComponent={
          <div>
            <div>111</div>
            <div>222</div>
          </div>
        }><Button>上左</Button></Tooltip>
    </div>
  )
}
```
:::


### 关闭tooltip
不展示tooltip
:::demo 设置isDisabled属性
```js
constructor(props) {
  super(props);
  this.state = {
    isDisabled: false,
    buttonContent: '点击关闭tooltip功能'
  };
}

toggle() {
  this.setState({
    isDisabled: !this.state.isDisabled
  });
}

getContent() {
  return this.state.buttonContent = this.state.isDisabled ? '点击开启tooltip功能' : '点击关闭tooltip功能';
}

render() {
  return (
    <Tooltip content="Top Left 提示文字" placement="top-start" isDisabled={this.state.isDisabled}>
      <Button onClick={this.toggle.bind(this)}>{this.getContent()}</Button>
    </Tooltip>
  )
}
```
:::


### API

**Tooltip props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isDisabled | 不显示popper | boolean | - | - |
| placement | popper位置 | string | - | bottom |
| content | 提示内容 | string | - | - |
| theme | 主题 | string | dark/light | light |
| offset | 偏移量 | number | - | 10 |
| popperComponent | popper展示内容插槽 | node | - | - |
