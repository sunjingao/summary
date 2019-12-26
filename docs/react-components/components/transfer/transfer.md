## Transfer 穿梭框

穿梭框相关操作。


### 基本用法
基本用法
:::demo
```js
constructor(props) {
  super(props);
  this.state = {
    transferOptions: {
          left: {
            title: "左侧内容",
            content: [
              {
                value: "上海",
                label: "上海",
                key: 0,
                isChecked: false,
              },
              {
                value: "北京",
                label: "北京",
                key: 1,
                isChecked: false,
              },
              {
                value: "广州",
                label: "广州",
                key: 2,
                isChecked: true,
              },
              {
                value: "深圳",
                label: "深圳",
                key: 3,
                isChecked: true,
              },
              {
                value: "南京",
                label: "南京",
                key: 4,
                isChecked: false,
              },
              {
                value: "杭州",
                label: "杭州",
                key: 5,
                isChecked: false,
              },
              {
                value: "重庆",
                label: "重庆",
                key: 6,
                isChecked: false,
              },
              {
                value: "天津",
                label: "天津",
                key: 7,
                isChecked: false,
              },
              {
                value: "大连",
                label: "大连",
                key: 8,
                isChecked: false,
              },
              {
                value: "苏州",
                label: "苏州",
                key: 9,
                isChecked: false,
              }
            ]
          },
          right: {
            title: "右侧内容",
            content: [
              {
                value: "辽宁",
                label: "辽宁",
                key: 10,
                isChecked: false,
              },
              {
                value: "吉林",
                label: "吉林",
                key: 11,
                isChecked: false,
              },
              {
                value: "黑龙江",
                label: "黑龙江",
                key: 12,
                isChecked: true,
              }
            ]
          }
        },
  }
}

transfer(value) {
  console.log("this is in v-transfer", value);
}

render() {
  return (
    <Transfer options={this.state.transferOptions} onChange={this.transfer.bind(this)}/>
  )
}
```
:::


### 禁止选中
禁止操作条目
:::demo 通过添加isDisabled禁止操作
```js
constructor(props) {
  super(props);
  this.state = {
    transferOptions: {
      left: {
        title: "左侧内容",
        content: [
          {
            value: "上海",
            label: "上海",
            key: 0,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "北京",
            label: "北京",
            key: 1,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "广州",
            label: "广州",
            key: 2,
            isChecked: true,
            isDisabled: false
          },
          {
            value: "深圳",
            label: "深圳",
            key: 3,
            isChecked: true,
            isDisabled: true
          },
          {
            value: "南京",
            label: "南京",
            key: 4,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "杭州",
            label: "杭州",
            key: 5,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "重庆",
            label: "重庆",
            key: 6,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "天津",
            label: "天津",
            key: 7,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "大连",
            label: "大连",
            key: 8,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "苏州",
            label: "苏州",
            key: 9,
            isChecked: false,
            isDisabled: false
          }
        ]
      },
      right: {
        title: "右侧内容",
        content: [
          {
            value: "辽宁",
            label: "辽宁",
            key: 10,
            isChecked: false,
            isDisabled: true
          },
          {
            value: "吉林",
            label: "吉林",
            key: 11,
            isChecked: false,
            isDisabled: false
          },
          {
            value: "哈尔滨",
            label: "哈尔滨",
            key: 12,
            isChecked: true,
            isDisabled: false
          }
        ]
      }
    },
  };
}

transfer(value) {
  console.log("this is in v-transfer");
  console.log(value);
}

render() {
  return (
    <Transfer options={this.state.transferOptions} onChange={this.transfer.bind(this)}/>
  );
}
```
:::


### API

**Transfer props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| options | 配置 | object | 必填项 | - |

**Transfer Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onChange | 改变选中时触发 | options |

