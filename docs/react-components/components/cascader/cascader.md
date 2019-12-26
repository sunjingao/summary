## Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。


###  基本用法
tipsArray属性设置展示数组，选中时回调onSelect方法
:::demo 基本用法
```js
constructor(props) {
  
  super(props);
  
  this.state = {
    cascaderArr: [
      {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
      {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
      {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
    ]
  };
}

onSelect(obj) {
  console.log("auto 选中的值是:", obj);
}

render() {
  return (
    <Cascader 
      tipsArray={this.state.cascaderArr} 
      onSelect={this.onSelect}
    />
  )
}
```
:::


### hover 触发
hover 方式触发条目展示
:::demo 设置 isHoverTrigger 为 true
```js
constructor(props) {
  
  super(props);
  
  this.state = {
    cascaderArr: [
      {
          value: 'zhinan',
          label: '指南',
          isSelected: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              isSelected: true,
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                  isSelected: true,
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
      {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
      {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
    ],
  }
}

onSelect(obj) {
  console.log("auto 选中的值是:", obj);
}

render() {
  return (
    <Cascader 
      value="" 
      tipsArray={this.state.cascaderArr} 
      onSelect={this.onSelect} 
      isHoverTrigger={true}
    />
  )
}
```
:::


### 禁止选中
禁止操作条目
:::demo 设置 isDisabled 为 true
```js
constructor(props) {
  
  super(props);
  
   this.state = {
     cascaderArr: [
       {
          value: 'zhinan',
          label: '指南',
          isDisabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
       {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
       {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
     ],
   }
}

onSelect(obj) {
  console.log("auto 选中的值是:", obj);
}

render() {
  return (
    <Cascader 
      value="" 
      tipsArray={this.state.cascaderArr} 
      onSelect={this.onSelect}
    />
  )
}
```
:::


### 可清空
选中条目允许清空
:::demo 设置 isCleanable 为 true
```js
constructor(props) {
  
  super(props);
  
  this.state = {
    cascaderArr: [
      {
        value: 'zhinan',
        label: '指南',
        children: [
          {
            value: 'shejiyuanze',
            label: '设计原则',
            children: [
              {
                value: 'yizhi',
                label: '一致'
               },
               {
                 value: 'fankui',
                 label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
      {
        value: 'zujian',
        label: '组件',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout 布局'
              },
              {
                value: 'color',
                label: 'Color 色彩'
              },
              {
                value: 'typography',
                label: 'Typography 字体'
              },
              {
                value: 'icon',
                label: 'Icon 图标'
              },
              {
                value: 'button',
                label: 'Button 按钮'
              }
            ]
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio 单选框'
              },
              {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              },
              {
                value: 'input',
                label: 'Input 输入框'
              },
              {
                value: 'input-number',
                label: 'InputNumber 计数器'
              },
              {
                value: 'select',
                label: 'Select 选择器'
              },
              {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              },
              {
                  value: 'switch',
                  label: 'Switch 开关'
              },
              {
                value: 'slider',
                label: 'Slider 滑块'
              },
              {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              },
              {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              },
              {
                value: 'upload',
                label: 'Upload 上传'
              },
              {
                value: 'rate',
                label: 'Rate 评分'
              },
              {
                value: 'form',
                label: 'Form 表单'
              }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
      {
        value: 'ziyuan',
        label: '资源',
        children: [
          {
            value: 'axure',
            label: 'Axure Components'
          },
          {
            value: 'sketch',
            label: 'Sketch Templates'
          },
          {
            value: 'jiaohu',
            label: '组件交互文档'
          }
        ]
      }
    ],
  }
}

onSelect(obj) {
  console.log("auto 选中的值是:", obj);
}

render() {
  return (
    <Cascader 
      value="" 
      tipsArray={this.state.cascaderArr} 
      onSelect={this.onSelect} 
      isCleanable
    />
  )
}

```
:::


### 展示方式
input框中只展示最后一级
:::demo 设置 isShowAllLevels 为 false
```js
constructor(props) {
  
  super(props);
  
  this.state = {
    cascaderArr: [
         {
           value: 'zhinan',
           label: '指南',
           children: [
             {
               value: 'shejiyuanze',
               label: '设计原则',
               children: [
                 {
                   value: 'yizhi',
                   label: '一致'
                 },
                 {
                   value: 'fankui',
                   label: '反馈'
                 },
                 {
                   value: 'xiaolv',
                   label: '效率'
                 },
                 {
                   value: 'kekong',
                   label: '可控'
                 }
               ]
             },
             {
               value: 'daohang',
               label: '导航',
               children: [
                 {
                   value: 'cexiangdaohang',
                   label: '侧向导航'
                 },
                 {
                   value: 'dingbudaohang',
                   label: '顶部导航'
                 }
               ]
             }
           ]
         },
         {
           value: 'zujian',
           label: '组件',
           children: [
             {
               value: 'basic',
               label: 'Basic',
               children: [
                 {
                   value: 'layout',
                   label: 'Layout 布局'
                 },
                 {
                   value: 'color',
                   label: 'Color 色彩'
                 },
                 {
                   value: 'typography',
                   label: 'Typography 字体'
                 },
                 {
                   value: 'icon',
                   label: 'Icon 图标'
                 },
                 {
                   value: 'button',
                   label: 'Button 按钮'
                 }
               ]
             },
             {
               value: 'form',
               label: 'Form',
               children: [
                 {
                   value: 'radio',
                   label: 'Radio 单选框'
                 },
                 {
                   value: 'checkbox',
                   label: 'Checkbox 多选框'
                 },
                 {
                   value: 'input',
                   label: 'Input 输入框'
                 },
                 {
                   value: 'input-number',
                   label: 'InputNumber 计数器'
                 },
                 {
                   value: 'select',
                   label: 'Select 选择器'
                 },
                 {
                   value: 'cascader',
                   label: 'Cascader 级联选择器'
                 }, {
                   value: 'switch',
                   label: 'Switch 开关'
                 },
                 {
                   value: 'slider',
                   label: 'Slider 滑块'
                 },
                 {
                   value: 'time-picker',
                   label: 'TimePicker 时间选择器'
                 },
                 {
                   value: 'date-picker',
                   label: 'DatePicker 日期选择器'
                 },
                 {
                   value: 'datetime-picker',
                   label: 'DateTimePicker 日期时间选择器'
                 },
                 {
                   value: 'upload',
                   label: 'Upload 上传'
                 },
                 {
                   value: 'rate',
                   label: 'Rate 评分'
                 },
                 {
                   value: 'form',
                   label: 'Form 表单'
                 }
               ]
             },
             {
               value: 'data',
               label: 'Data',
               children: [
                 {
                   value: 'table',
                   label: 'Table 表格'
                 },
                 {
                   value: 'tag',
                   label: 'Tag 标签'
                 },
                 {
                   value: 'progress',
                   label: 'Progress 进度条'
                 },
                 {
                   value: 'tree',
                   label: 'Tree 树形控件'
                 },
                 {
                   value: 'pagination',
                   label: 'Pagination 分页'
                 },
                 {
                   value: 'badge',
                   label: 'Badge 标记'
                 }
               ]
             },
             {
               value: 'notice',
               label: 'Notice',
               children: [
                 {
                   value: 'alert',
                   label: 'Alert 警告'
                 },
                 {
                   value: 'loading',
                   label: 'Loading 加载'
                 },
                 {
                   value: 'message',
                   label: 'Message 消息提示'
                 },
                 {
                   value: 'message-box',
                   label: 'MessageBox 弹框'
                 },
                 {
                   value: 'notification',
                   label: 'Notification 通知'
                 }
               ]
             },
             {
               value: 'navigation',
               label: 'Navigation',
               children: [
                 {
                   value: 'menu',
                   label: 'NavMenu 导航菜单'
                 },
                 {
                   value: 'tabs',
                   label: 'Tabs 标签页'
                 },
                 {
                   value: 'breadcrumb',
                   label: 'Breadcrumb 面包屑'
                 },
                 {
                   value: 'dropdown',
                   label: 'Dropdown 下拉菜单'
                 },
                 {
                   value: 'steps',
                   label: 'Steps 步骤条'
                 }
               ]
             }, {
               value: 'others',
               label: 'Others',
               children: [
                 {
                   value: 'dialog',
                   label: 'Dialog 对话框'
                 },
                 {
                   value: 'tooltip',
                   label: 'Tooltip 文字提示'
                 },
                 {
                   value: 'popover',
                   label: 'Popover 弹出框'
                 },
                 {
                   value: 'card',
                   label: 'Card 卡片'
                 },
                 {
                   value: 'carousel',
                   label: 'Carousel 走马灯'
                 },
                 {
                   value: 'collapse',
                   label: 'Collapse 折叠面板'
                 }
               ]
             }
           ]
         },
         {
           value: 'ziyuan',
           label: '资源',
           children: [
             {
               value: 'axure',
               label: 'Axure Components'
             },
             {
               value: 'sketch',
               label: 'Sketch Templates'
             },
             {
               value: 'jiaohu',
               label: '组件交互文档'
             }
           ]
         }
       ],
  }
}

onSelect(obj) {
  console.log("auto 选中的值是:", obj);
}

render() {
  return (
    <Cascader 
      value="" 
      tipsArray={this.state.cascaderArr} 
      onSelect={this.onSelect} 
      isShowAllLevels={false}
    />
  )
}
```
:::


### 自定义模板
自定义条目展示样式
:::demo 注入组件名称
```js
constructor(props) {
  
  super(props);
  
  this.state = {
   cascaderArr: [
     {
       value: 'zhinan',
       label: '指南',
       children: [
         {
           value: 'shejiyuanze',
           label: '设计原则',
           children: [
             {
               value: 'yizhi',
               label: '一致'
             },
             {
               value: 'fankui',
               label: '反馈'
             },
             {
               value: 'xiaolv',
               label: '效率'
             },
             {
               value: 'kekong',
               label: '可控'
             }
           ]
         },
         {
           value: 'daohang',
           label: '导航',
           children: [
             {
               value: 'cexiangdaohang',
               label: '侧向导航'
             },
             {
               value: 'dingbudaohang',
               label: '顶部导航'
             }
           ]
         }
       ]
     },
     {
       value: 'zujian',
       label: '组件',
       children: [
         {
           value: 'basic',
           label: 'Basic',
           children: [
             {
               value: 'layout',
               label: 'Layout 布局'
             },
             {
               value: 'color',
               label: 'Color 色彩'
             },
             {
               value: 'typography',
               label: 'Typography 字体'
             },
             {
               value: 'icon',
               label: 'Icon 图标'
             },
             {
               value: 'button',
               label: 'Button 按钮'
             }
           ]
         },
         {
           value: 'form',
           label: 'Form',
           children: [
             {
               value: 'radio',
               label: 'Radio 单选框'
             },
             {
               value: 'checkbox',
               label: 'Checkbox 多选框'
             },
             {
               value: 'input',
               label: 'Input 输入框'
             },
             {
               value: 'input-number',
               label: 'InputNumber 计数器'
             },
             {
               value: 'select',
               label: 'Select 选择器'
             },
             {
               value: 'cascader',
               label: 'Cascader 级联选择器'
             }, {
               value: 'switch',
               label: 'Switch 开关'
             },
             {
               value: 'slider',
               label: 'Slider 滑块'
             },
             {
               value: 'time-picker',
               label: 'TimePicker 时间选择器'
             },
             {
               value: 'date-picker',
               label: 'DatePicker 日期选择器'
             },
             {
               value: 'datetime-picker',
               label: 'DateTimePicker 日期时间选择器'
             },
             {
               value: 'upload',
               label: 'Upload 上传'
             },
             {
               value: 'rate',
               label: 'Rate 评分'
             },
             {
               value: 'form',
               label: 'Form 表单'
             }
           ]
         },
         {
           value: 'data',
           label: 'Data',
           children: [
             {
               value: 'table',
               label: 'Table 表格'
             },
             {
               value: 'tag',
               label: 'Tag 标签'
             },
             {
               value: 'progress',
               label: 'Progress 进度条'
             },
             {
               value: 'tree',
               label: 'Tree 树形控件'
             },
             {
               value: 'pagination',
               label: 'Pagination 分页'
             },
             {
               value: 'badge',
               label: 'Badge 标记'
             }
           ]
         },
         {
           value: 'notice',
           label: 'Notice',
           children: [
             {
               value: 'alert',
               label: 'Alert 警告'
             },
             {
               value: 'loading',
               label: 'Loading 加载'
             },
             {
               value: 'message',
               label: 'Message 消息提示'
             },
             {
               value: 'message-box',
               label: 'MessageBox 弹框'
             },
             {
               value: 'notification',
               label: 'Notification 通知'
             }
           ]
         },
         {
           value: 'navigation',
           label: 'Navigation',
           children: [
             {
               value: 'menu',
               label: 'NavMenu 导航菜单'
             },
             {
               value: 'tabs',
               label: 'Tabs 标签页'
             },
             {
               value: 'breadcrumb',
               label: 'Breadcrumb 面包屑'
             },
             {
               value: 'dropdown',
               label: 'Dropdown 下拉菜单'
             },
             {
               value: 'steps',
               label: 'Steps 步骤条'
             }
           ]
         }, {
           value: 'others',
           label: 'Others',
           children: [
             {
               value: 'dialog',
               label: 'Dialog 对话框'
             },
             {
               value: 'tooltip',
               label: 'Tooltip 文字提示'
             },
             {
               value: 'popover',
               label: 'Popover 弹出框'
             },
             {
               value: 'card',
               label: 'Card 卡片'
             },
             {
               value: 'carousel',
               label: 'Carousel 走马灯'
             },
             {
               value: 'collapse',
               label: 'Collapse 折叠面板'
             }
           ]
         }
       ]
     },
     {
       value: 'ziyuan',
       label: '资源',
       children: [
         {
           value: 'axure',
           label: 'Axure Components'
         },
         {
           value: 'sketch',
           label: 'Sketch Templates'
         },
         {
           value: 'jiaohu',
           label: '组件交互文档'
         }
       ]
     }
   ],
  }
}

onSelect(obj) {
  console.log("auto 选中的值是:", obj);
}

render() {
  
  class Comp extends React.Component {
    render() {
      return (
        <span>{this.props.item.label}c</span>
      )
    }
  }
  
  return (
    <Cascader 
      value="" 
      tipsArray={this.state.cascaderArr} 
      onSelect={this.onSelect} 
      componentName={<Comp />}
    />
  )
}
```
:::


### API

**Cascader props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tipArray | 要展示的内容 | array | - | [] |
| isHoverTrigger | 是否hover触发 | boolean | - | - |
| isCleanable | 是否可清空 | boolean | - | - |
| isShowAllLevels | 是否只展示最后一级 | boolean | - | true |
| isDisabled | tipArray的中的item是否禁止选中 | boolean | - | - |
| isSelected | tipArray的中的item是否默认选中 | boolean | - | - |
| width | input的宽度 | number | - | 170 |
| height | input的高度 | number | - | 40 |
| popperMaxHeight | 下拉框的最大高度 | number | - | 210 |
| itemWidth | 自动提示组件中每条数据的宽度 | number | - | 150 |
| itemHeight | 自动提示组件中每条数据的高度 | number | - | 30 |
| placeholder | 请选择 | string | - | - |
| componentName | 自定义组件 | node | - | - |

**Cascader Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onSelect | 被选中时的回调方法 | 当前item |

