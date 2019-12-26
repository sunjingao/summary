## Steps 步骤条

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。


### 基本用法
基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    process:1,
  };
}

next() {
  let next = this.state.process + 1;
  if (next > 3) {
    this.setState(
      {
        process: 0
      }
    );
  }
  else {
    this.setState({
      process: next
    });
  }
}

render() {
  
  return (
    <div>
      <Steps process={this.state.process}>
          <Steps.Step titleText="步骤 1"/>
          <Steps.Step titleText="步骤 2"/>
          <Steps.Step titleText="步骤 3"/>   
      </Steps>
      <Button className="steps-mt12" onClick={this.next.bind(this)} type="primary">下一步</Button>
    </div>
  );
}
```
:::


### 描述
添加描述
:::demo 设置descriptionText属性
```js
constructor(props) {
  super(props);
  this.state = {
    process: 0,
  };
}

next() {
  
  let next = this.state.process + 1;
  if (next > 3) {
    this.setState(
      {
        process: 0
      }
    );
  }
  else {
    this.setState({
      process: next
    });
  }
}

render() {
  return (
    <div>
        <Steps process={this.state.process}>
          <Steps.Step titleText="步骤 1" descriptionText="这是描述 1"/>
          <Steps.Step titleText="步骤 2" descriptionText="这是描述 2"/>
          <Steps.Step titleText="步骤 3" descriptionText="这是描述 3"/>
        </Steps>
        <Button className="steps-mt12" onClick={this.next.bind(this)} type="primary">下一步</Button>
    </div>
  );
}
```
:::


### 标题和描述的自定义
自定义标题和描述的展示
:::demo 设置titleComponent、descriptionComponent
```js
constructor(props) {
  super(props);
  this.state = {
    process:0,
  };
}

next() {
  
  let next = this.state.process + 1;
  if (next > 3) {
    this.setState(
      {
        process: 0
      }
    );
  }
  else {
    this.setState({
      process: next
    });
  }
}

render() {
  return (
    <div>
      <Steps process={this.state.process}>
        <Steps.Step 
            titleComponent={<span slot="titleText">这是标题1</span>}
            descriptionComponent={<span slot="descriptionText">这是描述1</span>}
        />
        <Steps.Step 
            titleComponent={<span slot="titleText">这是标题2</span>}
            descriptionComponent={<span slot="descriptionText">这是描述2</span>}
        />
        <Steps.Step 
            titleComponent={<span slot="titleText">这是标题3</span>}
            descriptionComponent={<span slot="descriptionText">这是描述3</span>}
        />
      </Steps>
        
      <Button className="steps-mt12" onClick={this.next.bind(this)} type="primary">下一步</Button>
    </div>
  )
}
```
:::


### 设置定宽的步骤条
设置定宽的步骤条
:::demo 设置space属性
```js
constructor(props) {
  super(props);
  this.state = {
    process: 1
  };
}

next() {
  
  let next = this.state.process + 1;
  if (next > 3) {
    this.setState(
      {
        process: 0
      }
    );
  }
  else {
    this.setState({
      process: next
    });
  }
}

render() {
  
  return (
    <div>
        <Steps process={this.state.process} space={200}>
          <Steps.Step titleComponent={<span slot="titleText">这是标题1</span>}/>
          <Steps.Step titleComponent={<span slot="titleText">这是标题2</span>}/>
          <Steps.Step titleComponent={<span slot="titleText">这是标题3</span>}/>
        </Steps>
        <Button className="steps-mt12" onClick={this.next.bind(this)} type="primary">下一步</Button>
    </div>
  )
}
```
:::


### 简洁风格的步骤条
简介的步骤条
:::demo 设置isSimple属性
```js
constructor(props) {
  super(props);
  this.state = {
    process:0,
  };
}

next() {
  
  let next = this.state.process + 1;
  if (next > 3) {
    this.setState(
      {
        process: 0
      }
    );
  }
  else {
    this.setState({
      process: next
    });
  }
}

render() {
  return (
    <div>
      <Steps process={this.state.process} isSimple>
        <Steps.Step titleText="步骤 1" descriptionText="这是描述 1"/>
        <Steps.Step titleText="步骤 2" descriptionText="这是描述 2"/>
        <Steps.Step titleText="步骤 3" descriptionText="这是描述 3"/>
      </Steps>
        
      <Button className="steps-mt12" onClick={this.next.bind(this)} type="primary">下一步</Button>
    </div>
  )
}
```
:::


### 错误状态
设置当前状态为错误
:::demo 设置isError属性为true
```js
constructor(props) {
  super(props);
  this.state = {
    process: 2,
  };
}

render() {
  return (
    <div>
      <Steps process={this.state.process} isError>
        <Steps.Step titleText="步骤 1"/>
        <Steps.Step titleText="步骤 2"/>
        <Steps.Step titleText="步骤 3"/>
      </Steps>    
    </div>
  )
}

```
:::


### API

**Steps props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| space | 横线的宽度 | number | - | 0 |
| process | 当前处理项的索引 | number | - | 0 |
| isError | 当前处理项是否为error | boolean | - | - |
| isSimple | 是否简单模式 | boolean | - | - |

**Steps props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| titleText | 标题文字 | string | - | - |
| descriptionText | 描述文字 | string | - | - |
| titleComponent | 标题插槽 | node | - | - |
| descriptionComponent | 描述插槽 | node | - | - |
| stepComponent | 自定义步骤插槽 | node | - | - |



