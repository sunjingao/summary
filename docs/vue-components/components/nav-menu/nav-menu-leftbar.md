#### 侧栏

使用 tree 组件的自定义模板用法

:::demo 侧栏
```html
<template>
<div>
    <div class="v-tree-test">
      <v-tree :option="treeOption1"></v-tree>
    </div>
</div>
</template>
<script>

import Vue from 'vue';

Vue.component(
  'test-tree',
  {
    template:`<li @click.stop="clickBlank">
                <i v-if="item.isParent" 
                    class="iconfont icon-down v-icon-direction" 
                    :style="{left:(level*20-16-2)+'px'}" 
                    :class="!item.expandNode&&'v-parent-not-expand'" 
                ></i>
                <a 
                    :class="['a-link']" 
                    @click.stop="clickWords(item)"
                >
                    {{item.value}}
                 </a>
               </li>`,
    props:{
      index:{},
      level:{},
      nodeData:{},
      setting:{},
      item:{}
    },
    methods:{
      clickBlank(){
        this.$emit('click-blank',this.item,this.index);
      },
      clickWords(){
        this.$emit('click-words',this.item);
      }
    }
  }
)

export default {
  data(){
    return {
        treeOption1: {
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


