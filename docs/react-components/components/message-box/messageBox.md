## MessageBox 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。


### 消息类型提示
默认为message类型。右下角仅有确认按钮
:::demo 默认的type为message类型
```js
onClick() {
  const messageBox = MessageBox({
    titleText: '这是标题',
    contentText: '这是内容',
    });
  messageBox.open();
}

render() {
  return (
    <Button onClick={this.onClick.bind(this)}>click</Button>
  );
}
```
:::


### 确认类型提示
确认类型。右下角有取消及确认按钮
:::demo 设置type为confirm
```js
onClick() {
  const messageBox = MessageBox({
    type:'confirm',
    titleText: '这是标题',
    contentText: '这是内容',
    canCancel(val){
      this.message = Message({
        titleText: 'cancel时的错误提示',
        type: 'error'
      });
      this.message.open();
      return true;
    },
    canConfirm(val){
      this.message = Message({
        titleText: 'confirm时的错误提示',
        type: 'error'
      });
      this.message.open();
      return true;
    },
    canClose(val){
      this.message = Message({
        titleText: 'close时的错误提示',
        type: 'error'
       });
      this.message.open();
      return true;
    },
  });
  messageBox.open();
}

render() {
  return (
    <Button onClick={this.onClick.bind(this)}>click</Button>
  )
}
```
:::


### 提交类型提示
提交类型。带有输入内容。
:::demo 设置type为prompt
```js
onClick() {
  const messageBox = MessageBox({
      type:'prompt',
      titleText: '这是标题',
      contentText: '这是内容',
      onConfirm: this.onConfirm.bind(this),
  });
  messageBox.open();
}

onConfirm(val) {
  console.log(val);
}

render() {
  return <Button onClick={this.onClick.bind(this)}>click</Button>
}
```
:::


### 使用html自定义展示
使用html自定义展示标题及正文
:::demo 使用html自定义
```js
onClick() {
  const messageBox = MessageBox({
    type:'prompt',
    titleText: '<span style="color:red;">这是自定义标题</span>',
    contentText: '<span style="color:red;">这是自定义内容</span>',
    onConfirm: this.onConfirm.bind(this),
  });
  messageBox.open();
}

onConfirm(val) {
  console.log(val);
}

render() {
  return <Button onClick={this.onClick.bind(this)}>click</Button>
}
```
:::


### 回调
允许通过回调函数控制关闭
:::demo 分为cancelCallBack，canConfirm，closeCallBack等几个回调
```js
onClick() {
  const messageBox = MessageBox({
    type:'prompt',
    titleText: '这是标题',
    contentText: '这是内容',
    canCancel(val){
      const message = Message({
        titleText: '取消成功',
        type: 'success'
      });
      message.open();
      return true;
    },
    canConfirm(val){
      const message = Message({
        titleText: '确认失败',
        type: 'error'
      });
      message.open();
      return false;
    },
    canClose(val){
      const message = Message({
        titleText: '关闭失败',
        type: 'error'
      });
      message.open();
      return false;
    },
  });
  messageBox.open();
}

render() {
  return <Button onClick={this.onClick.bind(this)}>click</Button>
}
```
:::


### API

**MessageBox props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 弹框类型 | string | message、confirm、prompt | message |
| titleText | 标题内容 | string | - | - |
| messageBoxClass | message-box样式名称 | string | - | - |
| contentText | content内容 | string | - | - |
| cancelButtonText | 取消按钮中的内容 | string | - | 取消 |
| confirmButtonText | 确认按钮中的内容 | string | - | 确认 |
| canCancel | 点击取消按钮时的回调 | function | - | 如果type为prompt，参数为输入的值 |
| canConfirm | 点击确认按钮时的回调 | string | - | 如果type为prompt，参数为输入的值 |
| canClose | 点击关闭符号时的回调 | string | - | 如果type为prompt，参数为输入的值 |
| onClose | 关闭弹窗回调 | func | - | - |
| onConfirm | 在 prompt 类型时，点击确认 | func | - | - |

**MessageBox Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开messageBox | - |
| close | 关闭messageBox | - |
| destroy | 销毁messageBox | - |
