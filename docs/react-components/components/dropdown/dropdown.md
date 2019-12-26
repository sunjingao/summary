## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。


### 基本用法
基本用法
:::demo 基本用法
```js
onCommand(command, event) {
  console.log('command:', command, 'event:', event);
}

render() {
  return (
    <Dropdown
      onCommand={this.onCommand}
      dropdownComponent={
        <Dropdown.Menu>
          <Dropdown.Item content="黄金糕">黄金糕</Dropdown.Item>
          <Dropdown.Item content="狮子头">狮子头</Dropdown.Item>
          <Dropdown.Item content="螺蛳粉">螺蛳粉</Dropdown.Item>
          <Dropdown.Item isDisabled content="双皮奶">双皮奶</Dropdown.Item>
          <Dropdown.Item isDivided content="蚵仔煎">蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <span className="v-dropdown-link">
        下拉菜单<i className="iconfont icon-down"/>
       </span>
    </Dropdown>
  )
}
```
:::


#### 触发下拉方式
通过hover触发下拉
:::demo 设置isHoverTrigger属性
```js
onCommand(command, event){
  console.log('command:', command, 'event:', event);
}

render() {
  return (
    <Dropdown 
      isHoverTrigger 
      onCommand={this.onCommand}
      dropdownComponent={
        <Dropdown.Menu>
          <Dropdown.Item content="a">黄金糕</Dropdown.Item>
          <Dropdown.Item content="b">狮子头</Dropdown.Item>
          <Dropdown.Item content="c">螺蛳粉</Dropdown.Item>
          <Dropdown.Item isDisabled content="d">双皮奶</Dropdown.Item>
          <Dropdown.Item isDivided content="e">蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <span className="v-dropdown-link">
        下拉菜单<i className="iconfont icon-down"/>
      </span>
    </Dropdown>
  )
}
```
:::


### 禁止菜单关闭
点击时可禁止菜单关闭
:::demo 设置isHideOnClick属性
```js
onCommand(command, event){
  console.log('command:', command, 'event:', event);
}

render() {
  return (
    <Dropdown 
      isHoverTrigger 
      isHideOnClick={false} 
      onCommand={this.onCommand}
      dropdownComponent={
        <Dropdown.Menu>
          <Dropdown.Item content="a">黄金糕</Dropdown.Item>
          <Dropdown.Item content="b">狮子头</Dropdown.Item>
          <Dropdown.Item content="c">螺蛳粉</Dropdown.Item>
          <Dropdown.Item isDisabled content="d">双皮奶</Dropdown.Item>
          <Dropdown.Item isDivided content="e">蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <span className="v-dropdown-link">
        下拉菜单<i className="iconfont icon-down"/>
      </span>
    </Dropdown>
  );
}
```
:::


### 按钮类型
左侧按钮触发click回调，右侧下拉
:::demo 设置isSplitButton属性
```js
onSplitClick(event) {
  console.log('click:', event);
}

onCommand(command, event){
  console.log('command:', command, 'event:', event);
}

render() {
  return (
    <Dropdown 
      isSplitButton 
      type="primary" 
      onCommand={this.onCommand} 
      onSplitClick={this.onSplitClick}
      dropdownComponent={
        <Dropdown.Menu>
          <Dropdown.Item content="a">黄金糕</Dropdown.Item>
          <Dropdown.Item content="b">狮子头</Dropdown.Item>
          <Dropdown.Item content="c">螺蛳粉</Dropdown.Item>
          <Dropdown.Item isDisabled content="d">双皮奶</Dropdown.Item>
          <Dropdown.Item isDivided content="e">蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <span>下拉菜单</span>
    </Dropdown>
  );
}
```
:::


### API

**Dropdown props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isSplitButton | 下拉触发元素呈现为按钮组 | boolean | - | - |
| isHoverTrigger | 以hover方式触发下拉框展示 | boolean | - | - |
| isHideOnClick | 点击时隐藏下拉框 | boolean | - | true |
| placement | 下拉框初始位置 | string | - | bottom-end |
| dropdownComponent | dropdown插槽 | node | - | - |

**Dropdown.Item props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isDisabled | 是否禁止选中 | boolean | - | - |
| isDivided | 是否展示分割线 | boolean | - | - |
| content | 展示的内容 | boolean | - | - |

**Dropdown Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |-------- |
| onSplitClick | isSplitButton 为 true 时，点击左侧按钮的回调 | event |
| onCommand | 选中item后回调 | 展示的内容, event |

