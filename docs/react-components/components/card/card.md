## Card 卡片

将信息聚合在卡片容器中展示。


### 基本用法
:::demo 
```js
render() {
  return (
    <Card 
      className="box-card"
      headerComponent={
        <div className="clearfix">
          <span>卡片名称</span>
          <Link style={{float: 'right', padding: '3px 0'}} underline={false} type="primary">
            操作按钮
          </Link>
        </div>
      }
    >
      <div className="text item">列表内容1</div>
      <div className="text item">列表内容2</div>
      <div className="text item">列表内容3</div>
      <div className="text item">列表内容4</div>
    </Card>
  )
}
```
:::


### 带图片
带图片
:::demo 带图片
```js
getCurrentDate() {
  let currentDate = new Date();
  return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
}

render() {
  return (
    <div>
      <Card 
      contentStyle={{padding:0}} 
        style={{width: '300px',display: 'inline-block'}}
      >
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" className="image" />,
        <div style={{padding: '14px', width: '300px'}}>
          <span>好吃的汉堡</span>
          <div className="bottom clearfix">
            <time className="time">{ this.getCurrentDate() }</time>
            <Link underline={false} type="primary" className="button">
              操作按钮
            </Link>
          </div>
        </div>   
      </Card>
      <Card 
        contentStyle={{padding:0}} 
        style={{'marginLeft': '20px', width: '300px',display: 'inline-block'}}
      >
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" className="image" />,
        <div style={{padding: '14px'}}>
          <span>好吃的汉堡</span>
          <div className="bottom clearfix">
            <time className="time">{ this.getCurrentDate() }</time>
            <Link underline={false} type="primary" className="button">
              操作按钮
            </Link>
          </div>
        </div>   
      </Card>
    </div>
  )
}
```
:::


### API

**Card props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| headerStyle | 标题处的样式 | object | - | - |
| contentStyle | 内容处的样式 | object | - | - |
| headerComponent | 表头自定义组件 | node | - | - |

