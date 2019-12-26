## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。


### 基本用法
基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    activeName: 'second',
  };
}

handleClick(name, label, event) {
  console.log('checked：', 'name:', name, 'label:', label, 'event:', event);
}

render() {
  return (
    <div className="bc">
      <Tabs value={this.state.activeName} onChecked={this.handleClick.bind(this)}>
        <Tabs.Pane label="用户管理" name="first"/>
        <Tabs.Pane label="配置管理" name="second"/>
        <Tabs.Pane label="角色管理" name="third"/>
        <Tabs.Pane label="定时任务补偿" name="fourth"/>
      </Tabs>
    </div>
  )
}

```
:::


### 禁止选中
禁止操作条目
:::demo 设置disabled属性
```js
constructor(props) {
  super(props);
  this.state = {
    activeName: 'second'
  };
}

handleClick(name, label, event) {
  console.log('checked：', 'name:', name, 'label:', label, 'event:', event);
}

render() {
  return (
    <div className="bc">
      <Tabs value={this.state.activeName} onChecked={this.handleClick}>
        <Tabs.Pane label="用户管理" name="first"/>
        <Tabs.Pane label="配置管理" name="second"/>
        <Tabs.Pane label="角色管理" name="third" disabled/>
        <Tabs.Pane label="定时任务补偿" name="fourth"/>
      </Tabs>
    </div>
  );
}
```
:::


### 关闭
允许关闭某个条目
:::demo 设置closabled属性
```js
constructor(props) {
  super(props);
  this.state = {
    activeName: 'second'
  };
}

handleClick(name, label) {
  console.log('checked：', 'name:', name, 'label:', label,);
}

onClose(name, label, event) {
  console.log('close--','name:', name, 'label:', label,);
}

render() {
  return (
    <div className="bc">
      <Tabs value={this.state.activeName} onChecked={this.handleClick} onClose={this.onClose} closabled>
        <Tabs.Pane label="用户管理" name="first"/>
        <Tabs.Pane label="配置管理" name="second"/>
        <Tabs.Pane label="角色管理" name="third"/>
        <Tabs.Pane label="定时任务补偿" name="fourth"/>
      </Tabs>
    </div>
  )
}
```
:::


### 自定义标签展示
自定义标签展示
:::demo 使用默认插槽
```js
constructor(props) {
  super(props);
  this.state = {
    activeName: 'second'
  };
}

handleClick(name, label, event) {
  console.log('checked：', 'name:', name, 'label:', label, 'event:', event);
}

render() {
  return (
    <div className="bc">
      <Tabs value={this.state.activeName} onChecked={this.handleClick}>
        <Tabs.Pane label="用户管理" name="first"><div>自定义用户</div></Tabs.Pane>
        <Tabs.Pane label="配置管理" name="second"><div>自定义配置</div></Tabs.Pane>
        <Tabs.Pane label="角色管理" name="third"><div>自定义角色</div></Tabs.Pane>
        <Tabs.Pane label="定时任务补偿" name="fourth"><div>自定义定时</div></Tabs.Pane>
      </Tabs>
    </div>
  );
}

```
:::


### 类型
卡片样式展示条目
:::demo 设置type="card"
```js
constructor(props) {
  super(props);
  this.state = {
    activeName: 'second'
  }
}

handleClick(name, label, event) {
  console.log('checked：', 'name:', name, 'label:', label, 'event:', event);
}

render() {
  return (
    <div className="bc">
      <Tabs value={this.state.activeName} onChecked={this.handleClick} type="card">
        <Tabs.Pane label="用户管理" name="first"/>
        <Tabs.Pane label="配置管理" name="second"/>
        <Tabs.Pane label="角色管理" name="third"/>
        <Tabs.Pane label="定时任务补偿" name="fourth"/>
      </Tabs>
     </div>
  );
}
```
:::


### 位置
展示方位控制
:::demo 设置position属性
```js
constructor(props) {
  super(props);
  this.state = {
    activeName: 'fourth',
    position1:'top',
    position2:'top',
  };
}

handleClick(name, label, event) {
  console.log('checked：', 'name:', name, 'label:', label, 'event:', event);
}

changePosition1(position) {
  this.setState({
    position1: position
  });
}

changePosition2(position) {
  this.setState({
    position2: position
  });
}

render() {
  return (
    <div>
      <div className="bc">
        <Tabs value={this.state.activeName} position={this.state.position1} onChecked={this.handleClick}>
          <Tabs.Pane label="用户管理" name="first"/>
          <Tabs.Pane label="配置管理" name="second"/>
          <Tabs.Pane label="角色管理" name="third"/>
          <Tabs.Pane label="定时任务补偿" name="fourth"/>
        </Tabs>
        <div className="tabs-position-content">
          <Button onClick={_ => this.changePosition1('top')}>上</Button>
          <Button onClick={_ => this.changePosition1('right')}>右</Button>
          <Button onClick={_ => this.changePosition1('bottom')}>下</Button>
          <Button onClick={_ => this.changePosition1('left')}>左</Button>
        </div>  
      </div>
    
      <div className="bc tabs-position-mt10">
       
        <Tabs value={this.state.activeName} position={this.state.position2} onChecked={this.handleClick} type="card">
          <Tabs.Pane label="用户管理" name="first"/>
          <Tabs.Pane label="配置管理" name="second"/>
          <Tabs.Pane label="角色管理" name="third"/>
          <Tabs.Pane label="定时任务补偿" name="fourth"/>
        </Tabs>
        <div className="tabs-position-content">
          <Button onClick={_ => this.changePosition2('top')}>上</Button>
          <Button onClick={_ => this.changePosition2('right')}>右</Button>
          <Button onClick={_ => this.changePosition2('bottom')}>下</Button>
          <Button onClick={_ => this.changePosition2('left')}>左</Button>
        </div>  
      </div>
    </div>
  );
}
```
:::


### API

**Tabs props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 当前选中的value | string | - | - |
| closabled | 是否打开close标签 | boolean | - | - |
| type | 选项卡类型 | string | default/card | default |
| position | 位置 | string | top/right/bottom/left | top |

**TabsPane props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 当前展示的label值 | string | - | - |
| name | 唯一value | string | - | - |
| disabled | 是否禁用 | boolean | - | - |

**Tabs Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | 点击关闭时触发 | name, label |
| onChecked | 选中时触发 | name, label, event |


