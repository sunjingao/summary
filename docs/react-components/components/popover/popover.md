## Popover 弹出框

基本用法


### 基本用法
:::demo 基本用法
```js
render() {
  
  return (
    <div>
        <Popover className="item" contentText="this is hover content" placement="bottom-start"><Button>hover</Button></Popover>
        <Popover className="item" contentText="this is focus content" placement="bottom-start" trigger="focus"><Button>focus</Button></Popover>
        <Popover className="item" contentText="this is click content" placement="bottom-start" trigger="click"><Button>click</Button></Popover>
        <Popover className="item" contentText="this is manual content" placement="bottom-start" trigger="manual"><Button>manual</Button></Popover>
    </div>
  );
}
```
:::


### 自定义展示
展示自定义内容
:::demo 设置popper插槽即可
```js
render() {
  return (
    <div>
      <Popover 
        className={"item"}
        placement="bottom-start" 
        trigger="hover"
        popperComponent={
          <div>
            <div className="body">
              <div>title</div>
              <div className="body-content">hover</div>  
            </div>
          </div>
        }
      >
        <Button>hover</Button>
      </Popover>
    
      <Popover 
        className={"item"}
        placement="bottom-start" 
        trigger="click"
        popperComponent={
          <div>
            <div className="body">
              <div>title</div>
              <div className="body-content">hover</div>  
            </div>
          </div>
        }
      >
        <Button>click</Button>
      </Popover>
    </div>
  );
}
```
:::


### API

**Popover props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isDisabled | 禁止展示 | bool | - | - |
| placement | popper位置 | string | - | bottom |
| contentText | popper内容 | string | - | - |
| theme | popper主题 | string | - | light |
| offset | popper偏移量 | number | - | 10 |
| trigger | 触发方式 | string | - | hover |
| popperComponent | popper自定义组件 | node | - | - |
