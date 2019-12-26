## TimePicker 时间选择器

用于选择或输入日期。


### 基本用法
基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    timeRange: {
      startTime: {
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      },
    },
  };
}

onSelect(val) {
  console.log('in onSelect');
  console.log(val);
}

render() {
  return (
    <Timepicker 
        timeRange={this.state.timeRange} 
        onSelect={this.onSelect} 
        placeholder="请选择时间"
    />
  )
}
```
:::


### 开始时间和结束时间
同时展示开始时间和结束时间
:::demo 使用 isShowEndTime 属性
```js
constructor(props) {
  super(props);
  this.state = {
    timeRange: {
      startTime: {
        hour: [
          {
            start: 10,
            end: 15
          },
          {
            start: 2,
            end: 5
          }
        ],
        minute: [
          {
            start: 1,
            end: 6
          },
          {
            start: 30,
            end: 55
          },
          {
            start: 57,
            end: 58
          }
        ],
        second: [
          {
            start: 16,
            end: 18
          },
          {
            start: 7,
            end: 9
          }
        ]
      },
     endTime: {
       hour: [
         {
           start: 3,
           end: 10
         },
         {
           start: 15,
           end: 20
         }
       ],
       minute: [
         {
           start: 3,
           end: 6
         },
         {
           start: 30,
           end: 50
         },
         {
           start: 0,
           end: 2
         }
       ],
       second: [
         {
           start: 7,
           end: 17
         },
         {
           start: 18,
           end: 30
         }
       ]
     },
     default: {
       startTime: {
         hour: 11,
         minute: 6,
         second: 18
       },
       endTime: {
         hour: 10,
         minute: 1,
         second: 28
       }
     }
   },
  }
}

onSelect(val){
  console.log('in onSelect');
  console.log(val);
}

render() {
  return (
    <Timepicker isShowEndTime timeRange={this.state.timeRange} onSelect={this.onSelect} />
  )
}
```
:::



### 清除
输入框中的内容允许清空
:::demo 添加 isCleanable 属性
```js
constructor(props) {
  super(props);
  this.state = {
     timeRange: {
         startTime: {
           hour: [
             {
               start: 10,
               end: 15
             },
             {
               start: 2,
               end: 5
             }
           ],
           minute: [
             {
               start: 1,
               end: 6
             },
             {
               start: 30,
               end: 55
             },
             {
               start: 57,
               end: 58
             }
           ],
           second: [
             {
               start: 16,
               end: 18
             },
             {
               start: 7,
               end: 9
             }
           ]

         },
         default: {
           startTime: {
             hour: 11,
             minute: 2,
             second: 18
           },
         }
       },
  };
}

onSelect(val) {
  console.log('in onSelect');
  console.log(val);
}

onClear(val) {
  console.log('onClear');
}

render() {
  return (
    <Timepicker timeRange={this.state.timeRange} onSelect={this.onSelect} onClear={this.onClear} isCleanable/>
  )
}

```
:::


### 设置宽高
设置宽高
:::demo 使用width height 属性
```js
constructor(props) {
  super(props);
  this.state = {
    timeRange: {
      startTime: {
           hour: [
             {
               start: 10,
               end: 15
             },
             {
               start: 2,
               end: 5
             }
           ],
           minute: [
             {
               start: 1,
               end: 6
             },
             {
               start: 30,
               end: 55
             },
             {
               start: 57,
               end: 58
             }
           ],
           second: [
             {
               start: 16,
               end: 18
             },
             {
               start: 7,
               end: 9
             }
           ]
         },
    },
  }
}

onSelect(val) {
  console.log('in onSelect');
  console.log(val);
}

render() {
  return (
    <Timepicker timeRange={this.state.timeRange} onSelect={this.onSelect} width={220} height={60}/>
  );
}
```
:::


### API

**Timepicker props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timeRange | 时间范围 | object | require | - |
| isShowEndTime | 是否展示结束时间 | boolean | - | false |
| isCleanable | 是否带有清空功能 | boolean | - | - |
| placeholder | 只有开始时间的默认展示 | string | - | 请选择时间 |
| frontPlaceholder/behindPlaceholder | 开始时间默认展示/结束时间默认展示| string | - | 起始时间/结束时间 |
| width | 宽度 | number | - | - |
| height | 高度 | number | - | 40 |
| itemHeight |  | number | - | 30 |

**Timepicker Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onSelect | 选中 | 时间 |
| onClear | 清除 | - |

