## DatePicker 时间选择器

用于选择或输入日期。


### 年份
展示年份
:::demo type:year
```js
constructor(props) {
  super(props);
  this.state = {
      optionsDate1: {
        range: [
          {
            end: {
              year: 2015,
            }
          },
          {
            start: {
              year: 2017,
            },
            end: {
              year: 2023,
            }
          },
        ]
      },
      optionsDate2: {
        defaultShow: {
          year: 2018,
        },
        range: [
          {
            end: {
              year: 2015,
            }
          },
          {
            start: {
              year: 2017,
            },
            end: {
              year: 2023,
            }
          },
        ]
      },
    };
}

onChange(val) {
  console.log('in time onChange:', val);
}

render() {
  return (
    <Datepicker 
      type="year" 
      options={this.state.optionsDate1} 
      onChange={this.onChange.bind(this)} 
      placeholder="请选择日期"
    />
  )
}
```
:::


### 展示月份
展示月份
:::demo type:month
```js
constructor(props) {
  super(props);
  this.state = {
      optionsDate1: {
        range: [
          {
            end: {
              year: 2015,
              month: 2
            }
          },
          {
            start: {
              year: 2017,
              month: 6,
            },
            end: {
              year: 2023,
              month: 11,
            }
          },
        ]
      },
      optionsDate2: {
        defaultShow: {
          year: 2018,
          month: 5,
        },
        range: [
          {
            end: {
              year: 2015,
              month: 2
            }
          },
          {
            start: {
              year: 2017,
              month: 6,
            },
            end: {
              year: 2023,
              month: 11,
            }
          },
        ]
      },
    };
}

onChange(val){
  console.log('in time onChange:', val);
}

render() {
  return (
    <div>
      <Datepicker type="month" options={this.state.optionsDate1} onChange={this.onChange.bind(this)} placeholder="请选择日期"/>
      <Datepicker type="month" options={this.state.optionsDate2} onChange={this.onChange.bind(this)} className="ml20"/>
    </div>
  )
}
```
:::


### 展示日期
展示日期
:::demo type:date
```js
constructor(props) {
  super(props);
  this.state = {
    optionsDate1: {
      range: [
        {
          end: {
            year: 2015,
            month: 2,
            date: 3,
          }
        },
        {
          start: {
            year: 2017,
            month: 6,
            date: 1
          },
          end: {
            year: 2023,
            month: 11,
            date: 20
          }
        },
      ]
    },
  };
}

onChange(val) {
  console.log('in time onChange:', val);
}

render() {
  return (
    <Datepicker 
      type="date" 
      options={this.state.optionsDate1} 
      onChange={this.onChange.bind(this)} 
      placeholder="请选择日期"
    />
  );
}
```
:::


### API

**Datepicker props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 展示年份/月份/日期 | string | year/month/date | date |
| options | 配置 | object | - | - |
| isCleanable | 是否带有清空功能 | bool | - | - |
| width | 宽度 | number | - | 170 |
| height | 高度 | number | - | 40 |
| placeholder | 默认显示内容 | string | - | - |

**Datepicker Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 改变日期时触发 | 日期 |
