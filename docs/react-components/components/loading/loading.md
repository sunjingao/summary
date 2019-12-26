## Loading 加载

加载数据时显示动效。


### 指令全屏loading
全屏loading
:::demo 指令后加.body为全屏展示
```js
constructor(props) {
  
  super(props);

  this.state = {
    sign: false
  };

  this.loading = Loading({
    target: document.body,
    text: 'Loading',
  });
}

toggle() {
  
  this.loading.open();

  setTimeout(
    _ => {
      this.loading.close(); 
    },
    2000
  );
}

render() {
  return (
    <div>
      <div className="loading-all">999</div>
      <Button onClick={this.toggle.bind(this)}>toggle</Button>
    </div>   
  )
}
```
:::


### 指令局部loading
指令局部loading
:::demo 设置target为选择器
```js
constructor(props) {
 
  super(props);
 
  this.state = {
    sign: false
  };
}

toggle() {
 
  if(!this.loading) {
    this.loading = Loading({
      target: "#needToLoad",
      text: 'Loading',
    });
  }
  
  if(this.state.sign) {
    this.loading.close();
  }
  else {
    this.loading.open();
  }
  
  this.setState({
    sign: !this.state.sign
  });
}

render() {
  return (
    <div>
      <div id="needToLoad" className="loading-all">999</div>
      <Button onClick={this.toggle.bind(this)}>toggle</Button>
    </div>   
  )
}
```
:::


### API

**Loading props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isShowLoadingIcon | 是否展示loading图片 | boolean | - | true |
| text | 文本 | string | - | - |
| loadingClass | loading样式 | string | - | - |
| contentClass | content区域样回收控制 | string | - | - |
| loadingComponent | 自定义组件 | - | node | - |



