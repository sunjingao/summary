## Backtop 回到顶部

返回页面顶部的操作按钮。


### 基本用法
基本用法展示。
:::demo Backtop 基础用法
```js
onClick(event) {
  console.log('onClick:', event);
}

render() {
  return (
    <div>
      Scroll down to see the bottom-right button.
      <Backtop 
        selector=".content" 
        bottom={260} 
        onClick={this.onClick}
      >
        <div
          style={{
            "height": "100%",
            "width": "100%",
            "backgroundColor": "#f2f5f6",
            "boxShadow": "0 0 6px rgba(0,0,0, .12)",
            "textAlign": "center",
            "lineHeight": "40px",
            "color": "#1989fa"
          }}
        >UP</div>
      </Backtop>
    </div>
  );
}
```
:::


### 在局部内容中展示
通过局部容器滚动展示回到顶部按钮
:::demo Backtop 设置selector属性为选择器
```js
onClick(event) {
  console.log('onClick:', event);
}

render() {
  return (
    <div>
      <div id="test">
        <div className="testpart"/>
      </div>
      <div>
        Scroll down to see the bottom-right button.
        <Backtop selector="#test" bottom={200} onClick={this.onClick}/>
      </div>
    </div>
  )
}
```
:::


### API

**Backtop props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selector | 触发滚动的元素，如果使用页面作为根元素，可传root | string | root、selectot | root |
| visibilityHeight | 滚动高度达到此参数值才出现 | number | - | 200 |
| right | 页面右边距离 | number | - | 40 |
| bottom | 页面底部距离 | number | - | 40 |
| timeout | 节流时间 | number | - | 500 |

**Backtop Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClick | 点击按钮时触发 | event |