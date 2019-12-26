## Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。


### 基本用法
标签基本用法
:::demo 基本用法
```js
constructor(props) {
  super(props);
  this.state = {
    treeOption1: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        },
        onChecked(data) {
          console.log('onChecked:', data);
        }
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                }
              ]
            }
          ]
        }
      ]
    },
    treeOption2: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        }
      },
      viewSetting: {
        isExpandAll: true,
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                }
              ]
            }
          ]
        }
      ]
    },
  };
}

render() {
  
  return (
    <div> 
    
      <div className="v-tree-test">
        <Tree option={this.state.treeOption1} />
      </div>
      
      <div className="v-tree-test">
        <Tree option={this.state.treeOption2} />
      </div>
    </div>
  )
}
```
:::


### 父节点允许选中
父节点允许选中
:::demo 设置 isParentLevelTriggerSelected 为true
```js
constructor(props) {
  super(props);
  this.state = {
    treeOption: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        }
      },
      viewSetting: {
        isExpandAll: true, // 是否展开全部
        isParentLevelTriggerSelected: true, // 含有子节点的节点点击文字会触发事件
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                }
              ]
            }
          ]
        }
      ]
    },
  };
}

render() {
  return (
    <div>
      <div className="v-tree-test">
        <Tree option={this.state.treeOption} />
      </div>
    </div>
  );
}
```
:::


### 禁止选中
禁止操作条目
:::demo 设置isDisabled禁止选中
```js
constructor(props) {
  super(props);
  this.state = {
    treeOption: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        }
      },
      viewSetting: {
        isExpandAll: true,
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                  isDisabled: true,
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              isDisabled: true,
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                }
              ]
            }
          ]
        }
      ]
    },
  }
}

render() {
  return (
    <div>
      <div className="v-tree-test">
        <Tree option={this.state.treeOption}/>
      </div>
    </div>
  );
}
```
:::


### 展开特定节点
默认展开特定节点
:::demo 设置 isExpandAll 属性
```js
constructor(props) {
  super(props);
  this.state = {
    treeOption1: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        }
      },
      viewSetting: {
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          isExpandNode:true,
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              isExpandNode:true,
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                }
              ]
            }
          ]
        }
      ]
    },
  }
}

render() {
  return (
    <div>
      <div className="v-tree-test">
        <Tree option={this.state.treeOption1}/>
      </div>
    </div>
  )
}
```
:::



### 展示多选
展示出多选框
:::demo 设置 isShowCheckBox
```js
constructor(props) {
  super(props);
  this.state = {
    treeOption1: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        },
        onChecked(data){
          console.log('onChecked:', data);
        },
      },
      viewSetting: {
        isExpandAll: true,
        isShowCheckBox: true,
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                  isChecked: true
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                  isSelected:true
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                  isDisabled: true,
                  isChecked: true,
                }
              ]
            }
          ]
        }
      ]
    },
    treeOption2: {
      callBack: {
        onSelected(data) {
          console.log('onSelected:', data);
        },
        onChecked(data){
          console.log('onChecked:', data);
        },
      },
      viewSetting: {
        isExpandAll: true,
        isShowCheckBox: true,
        isCheckedAll: true, // 是否全部选中
      },
      nodeList: [
        {
          key: "公司基本资料",
          value: "公司基本资料",
          nodeList: [
            {
              key: "公司介绍",
              value: "公司介绍",
            },
            {
              key: "股东及机构选股",
              value: "股东及机构选股",
              nodeList: [
                {
                  key: "十大股东明细",
                  value: "十大股东明细",
                },
                {
                  key: "十大股东明细2",
                  value: "十大股东明细2",
                },
                {
                  key: "十大流通股东",
                  value: "十大流通股东",
                  isChecked: true
                }
              ]
            }
          ]
        },

        {
          key: "财务数据",
          value: "财务数据",
          nodeList: [
            {
              key: "财务摘要",
              value: "财务摘要",
              nodeList: [
                  {
                    key: "财务摘要1",
                    value: "财务摘要1",
                  },
                  {
                    key: "财务摘要2",
                    value: "财务摘要2",
                  }
                ]
            },
            {
              key: "主营构成",
              value: "主营构成",
              nodeList: [
                {
                  key: "按项目名称展示",
                  value: "按项目名称展示",
                  isSelected:true
                },
                {
                  key: "按行业分类",
                  value: "按行业分类",
                  isDisabled: true,
                  isChecked: true,
                }
              ]
            }
          ]
        }
      ]
    },
  };
}

render() {
  
  return (
    <div>
      <div className="v-tree-test">
        <Tree option={this.state.treeOption2}/>
      </div>
      <div className="v-tree-test">
        <Tree option={this.state.treeOption1}/>
      </div>
    </div>
  );
}
```
:::


### 自定义样式
自定义条目的展示样式       
:::demo 设置nodeComponent
```js
constructor(props) {
  super(props);
  this.state = {
     treeOption1: {
          callBack: {
            onSelected(data) {
              console.log('onSelected:', data);
            }
          },
          viewSetting: {
            componentName:'test-tree'
          },
          nodeList: [
            {
              key: "公司基本资料",
              value: "公司基本资料",
              nodeList: [
                {
                  key: "公司介绍",
                  value: "公司介绍",
                },
                {
                  key: "股东及机构选股",
                  value: "股东及机构选股",
                  nodeList: [
                    {
                      key: "十大股东明细",
                      value: "十大股东明细",
                    },
                    {
                      key: "十大股东明细2",
                      value: "十大股东明细2",
                    },
                    {
                      key: "十大流通股东",
                      value: "十大流通股东",
                    }
                  ]
                }
              ]
            },
    
            {
              key: "财务数据",
              value: "财务数据",
              isExpandNode:true,
              nodeList: [
                {
                  key: "财务摘要",
                  value: "财务摘要",
                  isExpandNode:true,
                  nodeList: [
                      {
                        key: "财务摘要1",
                        value: "财务摘要1",
                      },
                      {
                        key: "财务摘要2",
                        value: "财务摘要2",
                      }
                    ]
                },
                {
                  key: "主营构成",
                  value: "主营构成",
                  nodeList: [
                    {
                      key: "按项目名称展示",
                      value: "按项目名称展示",
                    },
                    {
                      key: "按行业分类",
                      value: "按行业分类",
                    }
                  ]
                }
              ]
            }
          ]
    },
  }
}

render() {
                
  class Comp extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    clickBlank(item, event) {
      
      event.stopPropagation();
      
      this.props.onClickBlank && this.props.onClickBlank(item, event);
    }

    clickWords(item, event) {
      this.props.onClickWords && this.props.onClickWords(item, event);
    }
    
    render() {
      
      return (
        <li className={this.props.className} style={this.props.style} onClick={event => this.clickBlank(this.props.item, event)}>
          {
            this.props.item.isParent && 
                <i className={`iconfont icon-down v-icon-direction ${!this.props.item.isExpandNode && 'v-parent-not-expand' || ''}`} 
                  style={{left:(this.props.level*20-16-2)+'px'}}
                />
          }
          <a 
            className="a-link" 
            onClick={ event => this.clickWords(this.props.item, event)}
          >
            自定义{this.props.item.value}
          </a>
        </li>
      )
    }
  }
  
  return (
    <div>
      <div className="v-tree-test">
        <Tree option={this.state.treeOption1} nodeComponent={<Comp />} />
      </div>
    </div>
  )
}

```
:::


### API

**Tree props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| option | 配置 | object | - | - |
| option.viewSetting.isShowCheckBox | 展示checkbox | boolean | - | - |
| option.viewSetting.isCheckedAll | 所有checkbox都选中 | boolean | - | - |
| option.viewSetting.isExpandAll | 展开所有节点 | boolean | - | - |
| option.viewSetting.isParentLevelTriggerSelected | 点击父元素item也触发onSelected事件 | boolean | - | - |
| option.nodeSetting.isDisabled | 禁止选中 | boolean | - | - |
| option.nodeSetting.isSelected | 文字是否被选中 | boolean | - | - |
| option.nodeSetting.isChecked | 多选框是否默认选中 | boolean | - | - |
| option.nodeSetting.isExpandNode | 是否展开子节点 | boolean | - | - |
| option.viewSetting.componentName | 自定义组件名称 | String | - | - |
| option.nodeSetting.key | 每个node的key | string | - | - |
| option.nodeSetting.value | 每个node显示的值 | string | - | - |
| option.nodeSetting.nodeList | 子节点列表 | array | - | - |

**Tree Events**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| option.callBack.onChecked | checkbox选中回调 | 被选中的item | 
| option.callBack.onSelected | 点击item回调 | 被选中的item | 


