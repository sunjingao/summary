## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。


### 基本用法
基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    text: 55,
    ary: [
      {label: 1, value: 11,},
      {label: 2, value: '222', isDisabled: true},
      {label: 3, value: 33, isDisabled: true},
      {label: 4, value: 44},
      {label: 5, value: 55},
      {label: 6, value: 66, isDisabled: true},
      {label: 7, value: 77, isDisabled: true},
      {label: 8, value: 88, isDisabled: true},
      {label: 9, value: 99, isDisabled: true},
      {label: 10, value: 100, isDisabled: true},
      {label: 11, value: 101, isDisabled: true},
      {label: 12, value: 102, isDisabled: true},
      {label: 13, value: '103', isDisabled: true},
      {label: 14, value: 104, isDisabled: true},
      {label: 15, value: 105},
    ]
  };
}

onClickOption(val, label, event) {
  console.log('click:', val, label, event);
}

render() {
  
  let elements = this.state.ary.map(
    (item, index) => React.cloneElement(
        <Select.Option />,
        {
          key: index,
          value: item.value,
          label: item.label,
          isDisabled: item.isDisabled,
        }
      )
  );

  return (
    <Select value={this.state.text} onClickOption={this.onClickOption}>
      {elements}
    </Select>
  )
}
```
:::


### 带删除节点
允许删除输入框中的内容
:::demo 使用 isCleanable 属性
```js
constructor(props) {
  super(props);
  this.state = {
    text: '',
    ary: [
      {label: 1, value: 11},
      {label: 2, value: '222'},
      {label: 3, value: 33, isDisabled: true},
      {label: 4, value: 44},
      {label: 5, value: 55},
      {label: 6, value: 66},
      {label: 7, value: 77},
      {label: 8, value: 88},
      {label: 9, value: 99},
      {label: 10, value: 100},
      {label: 11, value: 101},
      {label: 12, value: 102},
      {label: 13, value: '103'},
      {label: 14, value: 104},
      {label: 15, value: 105},
    ]
  };
}

onClickOption(val, label, event) {
  console.log('click:', val, label, event);
}

onClear(event) {
  console.log('onClear');  
}

render() {
  
  let elements = this.state.ary.map(
    (item, index) => React.cloneElement(
        <Select.Option />,
        {
          key: index,
          value: item.value,
          label: item.label,
          isDisabled: item.isDisabled,
        }
      )
  );

  return (
    <Select value={this.state.text} onClickOption={this.onClickOption} isCleanable onClear={this.onClear}>
      {elements}
    </Select>
  )
}
```
:::


### 自定义模板
自定义条目的展示样式
:::demo 使用默认插槽
```js
constructor(props) {
  super(props);
  this.state = {
    text: '',
    ary: [
      {label: 1, value: 11},
      {label: 2, value: '222'},
      {label: 3, value: 33, isDisabled: true},
      {label: 4, value: 44},
      {label: 5, value: 55},
      {label: 6, value: 66},
      {label: 7, value: 77},
      {label: 8, value: 88},
      {label: 9, value: 99},
      {label: 10, value: 100},
      {label: 11, value: 101},
      {label: 12, value: 102},
      {label: 13, value: '103'},
      {label: 14, value: 104},
      {label: 15, value: 105},
    ]
  };
}

onClickOption(val, label, event) {
  console.log('click:', val, label, event);
}

render() {
  
  class Test extends React.Component {
    
    render() {
      
      return (
        <div>111, {this.props.label}</div>
      )
    }
  }
  
  
  let elements = this.state.ary.map(
    (item, index) => React.cloneElement(
        <Select.Option />,
        {
          key: index,
          value: item.value,
          label: item.label,
          isDisabled: item.isDisabled,
          template: <Test />
        }
      )
  );

  return (
    <Select value={this.state.text} onClickOption={this.onClickOption}>
      {elements}
    </Select>
  )
}
```
:::


### 分组
自定义组别进行展示
:::demo 分组的展示
```js
constructor(props) {
  
  super(props);
  
  this.state = {
    text: '',
    options: [
      {
        label: '热门城市',
        options: [
          {
            value: 'Shanghai',
            label: '上海'
          },
          {
            value: 'Beijing',
            label: '北京'
          }
        ]
      },
      {
        label: '城市名',
        options: [
          {
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }
        ]
      }
    ],
  };
}

onClickOption(val, label, event) {
  console.log('click:', val, label, event);
}

render() {
  
  let elements = this.state.options.map(
    (group, index) => 
      <Select.Group key={index} label={group.label}>
          {
            group.options.map(
              (item, index) => (
                React.cloneElement(
                  <Select.Option />,
                  {
                    key: index,
                    value: item.value,
                    label: item.label,
                    isDisabled: item.isDisabled,
                   }
                 )
                )
              )
          }
      </Select.Group>
  );
  
  return (
    <Select value={this.state.text} onClickOption={this.onClickOption}>
      {elements}
    </Select>
  )
}
```
:::


### 多选
可以选中多个条目
:::demo 设置 isMultiple 属性
```js
constructor(props) {
  
  super(props);
  
  this.state = {
        text: [],
        ary: [
          {label: 1, value: 11},
          {label: 2, value: '222'},
          {label: 3, value: 33, isDisabled: true},
          {label: 4, value: 44},
          {label: 5, value: 55},
          {label: 6, value: 66},
          {label: 7, value: 77},
          {label: 8, value: 88},
          {label: 9, value: 99},
          {label: 10, value: 100},
          {label: 11, value: 101},
          {label: 12, value: 102},
          {label: 13, value: '103'},
          {label: 14, value: 104},
          {label: 15, value: 105},
          {label: 16, value: 106},
          {label: 17, value: 107},
          {label: 18, value: 108},
        ]
  };
}

onClickOption(val, label, event) {
  console.log('click:', val);
}

onClose(value) {
  console.log('onClose', value);
}

render() {
    
  let elements = this.state.ary.map(
    (item, index) => React.cloneElement(
        <Select.Option />,
        {
          key: index,
          value: item.value,
          label: item.label,
          isDisabled: item.isDisabled,
        }
      )
  );

  return (
    <Select isMultiple value={this.state.text} onClickOption={this.onClickOption} onClose={this.onClose}>
      {elements}
    </Select>
  )
}
```
:::


### API

**Select props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isMultiple | 是否允许多选 | boolean | - | false |
| value | 展示的值 | string/number/array | - | - |
| placeholder | 默认值 | string | - | 请选择 |
| isCleanable | 是否显示清除按钮 | bool | - | - |
| width | 宽度 | number | - | 180 |
| height | 高度 | number | - | - |
| minHeight | 最小高度（isMultiple为true时） | number | - | 40 |
| maxHeight | 最大高度（isMultiple为true时） | number | - | 200 |

**Select props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 展示的内容 | string | - |  |
| value | 展示的值 | string | - |  |
| isDisabled | 是否允许展示 | boolean | - | - |
| template | 自定义模板 | node | - | - |

**Select Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| clickOption | 点击option时触发 | value, label, event |
| onClear | 点击input的清除符号触发 | event |
| onCloseItem | 多选时，点击每项的关闭符号触发 | event |


