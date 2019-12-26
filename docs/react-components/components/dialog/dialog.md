## Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。


### 基本用法
基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    isShow: false,
  };
}

openDialog() {
  this.setState({
    isShow: true,
  });
}

hideDialog() {
  this.setState({
    isShow: false,
  });
}

onClose() {
  this.setState({
    isShow: false
  });
}

render() {
  return (
    <div>
      <Dialog 
        titleText="this is title" 
        isShow={this.state.isShow}
        onClose={this.onClose.bind(this)}
        footerComponent={
          <span>
            <Button onClick={this.hideDialog.bind(this)}>取 消</Button>
            <Button type="primary" onClick={this.hideDialog.bind(this)}>确 定</Button>
          </span>
        }
      >
        <div>这是一段信息</div>
      </Dialog>
      <Button onClick={this.openDialog.bind(this)}>open</Button>
    </div>
  )
}
```
:::


### 居中布局
标题和footer部分可居中对局
:::demo 设置isCenter属性
```js
constructor(props) {
  
  super(props);
  
  this.state = {
    isShow: false,
  };
}

openDialog() {
  this.setState({
    isShow: true,
  });
}

hideDialog() {
  this.setState({
    isShow: false,
  });
}

onClose() {
  this.setState({
    isShow: false
  });
}

render() {
  return (
    <div>
      <Dialog 
        isShow={this.state.isShow}
        titleText="this is title" 
        isCenter 
        width="300"
        onClose={this.onClose.bind(this)}
        footerComponent={
          <span>
            <Button onClick={this.hideDialog.bind(this)}>取 消</Button>
            <Button type="primary" onClick={this.hideDialog.bind(this)}>确 定</Button>
          </span>
        }
      >
        <div>这是一段信息</div>
      </Dialog>
      <Button onClick={this.openDialog.bind(this)}>open</Button>
    </div>
  )
}
```
:::


### 嵌套
打开对话框后，点击嵌套按钮，可以打开新的对话框。
:::demo 嵌套
```js
constructor(props) {
  
  super(props);
  this.state = {
    nest: false,
    visible: false
  };
}

open() {
  this.setState({
    visible: true,
  });
}

showVisible() {
  this.setState({
    nest: true,
  });
}

hideVisible() {
  this.setState({
    visible: false,
  });
}

showNest() {
  this.setState({
    nest: false,
  });
}

hideNest() {
  this.setState({
    nest: false
  });
}

onCloseVisible() {
  this.setState({
    visible: false
  });
}

onCloseNest() {
  this.setState({
    nest: false
  });
}

render() {
  return (
    <div>
      <Dialog titleText="this is title" isShow={this.state.visible} isCenter width="300"
        onClose={this.onCloseVisible.bind(this)}
        footerComponent={
          <span>
            <Button onClick={this.hideVisible.bind(this)}>取 消</Button>
            <Button type="primary" onClick={this.showVisible.bind(this)}>嵌 套</Button>
          </span>
        }>
          <div>这是一段信息</div>
      </Dialog>
    
      <Dialog titleText="222222222" isShow={this.state.nest} width="500"
        onClose={this.onCloseNest.bind(this)}
        footerComponent={
          <span>
            <Button onClick={this.hideNest.bind(this)}>取 消</Button>
            <Button type="primary" onClick={this.hideNest.bind(this)}>确 定</Button>
          </span>
        }>
          <div style={{height: '500px'}}>这是嵌套内容</div>
      </Dialog>
        
      <Button onClick={this.open.bind(this)}>open</Button>
    </div>
  );
}
```
:::


### API

**Dialog props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isShow | 是否展示 | boolean | - | false |
| isCenter | 标题和footer部分是否居中 | boolean | - | false |
| isShowClose | 是否展示close按钮 | boolean | - | true |
| width | 宽度 | string | - | 50% |
| titleText | 标题文字 | string | - | - |
| canCloseCb | 点击关闭前的回调 | function | - | - |

**Dialog Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | dialog关闭 | - |




