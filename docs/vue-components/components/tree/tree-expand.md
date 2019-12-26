#### 展开特定节点

默认展开特定节点

:::demo 设置 expandAll 属性
```html
<template>
<div>
    <div class="v-tree-test">
      <v-tree :option="treeOption1"></v-tree>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return {
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
              expandNode:true,
              nodeList: [
                {
                  key: "财务摘要",
                  value: "财务摘要",
                  expandNode:true,
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
}
</script>
<style scoped>
.v-tree-test {
  display: inline-block;
  border: 1px solid gray;
  width: 300px;
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
```
:::


