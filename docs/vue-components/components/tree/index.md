## Tree 树形控件

属性控件基本用法

:::demo 
```html
<template>
    <tree-base></tree-base>
    <tree-parent-selected></tree-parent-selected>
    <tree-disabled></tree-disabled>
    <tree-expand></tree-expand>
    <tree-checkbox></tree-checkbox>
    <tree-component></tree-component>
</template>
<script>

import treeBase from './tree-base.md';
import treeParentSelected from './tree-parentSelected.md';
import treeDisabled from './tree-disabled.md';
import treeExpand from './tree-expand.md';
import treeCheckbox from './tree-checkbox.md';
import treeComponent from './tree-component.md';

export default {
  data(){
    return {
    }
  },
  components:{
    treeBase,
    treeParentSelected,
    treeDisabled,
    treeExpand,
    treeCheckbox,
    treeComponent
  }
}
</script>
```
:::



#### API

**tree props**

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| option | 配置 | object | - | - |
| option.viewSetting.showCheckBox | 展示checkbox | boolean | - | false |
| option.viewSetting.checkedAll | 所有checkbox都选中 | boolean | - | false |
| option.viewSetting.expandAll | 展开所有节点 | boolean | - | false |
| option.viewSetting.parentLevelTriggerSelected | 点击父元素item也触发onSelected事件 | boolean | - | false |
| option.viewSetting.componentName | 自定义组件名称 | String | - | - |
| option.nodeSetting.key | 每个node的key | string | - | - |
| option.nodeSetting.value | 每个node显示的值 | string | - | - |
| option.nodeSetting.nodeList | 子节点列表 | array | - | - |
| option.nodeSetting.disabled | 禁止选中 | boolean | - | false |
| option.nodeSetting.selected | 文字是否被选中 | boolean | - | false |
| option.nodeSetting.checked | 多选框是否默认选中 | boolean | - | false |
| option.nodeSetting.expandNode | 是否展开子节点 | boolean | - | false |

**tree Methods**

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| option.callBack.onChecked | checkbox选中回调 | 被选中的item | 
| option.callBack.onSelected | 点击item回调 | 被选中的item | 


