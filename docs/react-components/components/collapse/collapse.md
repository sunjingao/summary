## Collapse 折叠面板

通过折叠面板收纳内容区域。


### 基本用法
:::demo 基础用法
```js
constructor(props) {
  super(props);
  this.state = {
    activeNames: ['2']
  };
}

handleChange(val) {
  console.log(val);
}

render() {
  return (
    <Collapse value={this.state.activeNames} onChange={this.handleChange}>
      <Collapse.Item 
        name="1"
        titleText="一致性 Consistency" 
      >
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Collapse.Item >
      <Collapse.Item  
        name="2"
        titleText="反馈 Feedback" 
      >
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>,
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Collapse.Item>
      <Collapse.Item 
        name="3"
        titleText="效率 Efficiency" 
      >
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Collapse.Item>
      <Collapse.Item 
        name="4"
        titleText="可控 Controllability" 
      >
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Collapse.Item>
    </Collapse>
  );
}
```
:::


### 手风琴效果
手风琴效果
:::demo 设置isAccordion属性
```js
constructor(props) {
  super(props);
  this.state = {
    activeNames: '1'
  };
}

handleChange(val) {
  console.log(val);
}

render() {
  return (
    <div>
      <Collapse value={this.state.activeNames} onChange={this.handleChange.bind(this)} isAccordion>
        <Collapse.Item titleText="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </Collapse.Item>
        <Collapse.Item titleText="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </Collapse.Item>
        <Collapse.Item titleText="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </Collapse.Item>
        <Collapse.Item titleText="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </Collapse.Item>
      </Collapse>
    </div>
  );
}
```
:::


### 自定义展示
自定义面板标题
:::demo 设置titleComponent插槽
```js
constructor(props) {
  super(props);
  this.state = {
    activeNames: '1'
  };
}

handleChange(val) {
  console.log(val);
}

render() {
  return (
    <Collapse value={this.state.activeNames} onChange={this.handleChange.bind(this)}>
      <Collapse.Item 
        name="1"
        titleComponent={[
          <div key="1">自定义：一致性 Consistency</div>
        ]}
      >
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>,
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Collapse.Item>
      <Collapse.Item 
        name="2"
        titleComponent={[
          <div key="1">自定义：反馈 Feedback</div>
        ]}
      >
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>,
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Collapse.Item>
      <Collapse.Item 
        name="3"
        titleComponent={[
          <div key="1">自定义：效率 Efficiency</div>
        ]}
      >
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Collapse.Item>
      <Collapse.Item 
        name="4"
        titleComponent={[
          <div key="1">自定义：可控 Controllability</div>
        ]}
      >
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Collapse.Item>
    </Collapse>
  )
}
```
:::


### API

**Collapse props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value| 当前展开的内容 | array / string | - | - |
| isAccordion | 是否最多只能展示一个内容 | boolean | - | - |

**Collapse.Item props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标识 | string/number | - | - |
| isDisabled | 是否禁止操作 | boolean | - | - |
| isShowDirection | 是否展示方向箭头 | boolean | - | true |
| titleText | 标题内容 | string | - | - |
| titleComponent | 标题插槽 | node | - | - |

**Collapse Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 有折叠动作时触发 | 当前的name |

