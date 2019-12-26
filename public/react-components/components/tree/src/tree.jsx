import React from 'react';
import PropTypes from "prop-types";
import Component from '../../Base/index';
import deepClone from '../../../src/utils/deepClone';
import TreeNode from './tree-node';

class Tree extends Component {

  constructor(props) {

    super(props);

    this.state = {
      setting: null, // 树配置
    };

    // 这里的params要放到state上，因为state用到了params中的内容
    this.params = {
      noNodeListNodeArr: [], // 没有nodeList属性的节点集合
      defaultSetting: {
        callBack: {
          onChecked: null, // 多选框被选中前触发
          onSelected: null, // 标签被选中
        },
        viewSetting: {
          isShowCheckBox: false, // 是否展示多选
          isCheckedAll: false, // 是否全部选中
          isExpandAll: false, // 是否展开全部
          isParentLevelTriggerSelected: false, // 含有子节点的节点点击文字会触发事件
        },
        nodeSetting: {

          key: "", // 每个node的key
          value: "", // 每个node显示的值
          nodeList: [], // 子节点列表
          isDisabled: false, // 禁止选中
          isSelected: false, // 是否被选中
          isChecked: "", // 多选框是否默认选中
          isExpandNode: false, // 是否展开子节点

          parent: null, // 父节点指针，用于checkbox选中的问题
          isParent: false, // 是否有子元素，有则显示展开或搜索图标
          // 被选中的状态
          // 0：自己及子元素都没被选中，
          // 1：除disabled为true的节点外，子节点非全选（一种情况是全部选，另一种情况是选了一部分），
          // 2：除disabled为true的节点外，子节点全选，
          // 3：自己及子元素全被选中
          checkboxType: 0,
        },
      }
    };

    this.state.setting = this.getInitSetting();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.option !== this.props.option) {
      this.setState({
        setting: this.getInitSetting()
      });
    }
  }

  // 初始化state的setting
  getInitSetting() {

    let setting = this.getDefaultSetting();

    // 改变setting和noNodeListNodeArr的checkbox状态
    this.props.checkboxOperates.initCheckboxType(setting, this.params.noNodeListNodeArr);

    return setting;
  }

  // 对node节点的属性进行初始化设置，
  nodeSetting(node, parentNode, setting) {

    node.parent = parentNode;

    if (
      !node.hasOwnProperty('isExpandNode') &&
      setting.viewSetting.isExpandAll
    ) {
      node.isExpandNode = true;
    }
    if (typeof node.isParent === "undefined") {
      node.isParent = !!node.nodeList && node.nodeList.length > 0;
    }
    node = Object.assign({}, this.params.defaultSetting.nodeSetting, node);

    return node
  }

  // 初始化setting的nodeList
  getDefaultSetting(node, setting) {

    if (node) {
      node.nodeList && node.nodeList.forEach(
        (x, index, originalArr) => {
          originalArr[index] = this.nodeSetting(x, node, setting);
          this.getDefaultSetting(originalArr[index], setting);
        }
      );
    } else {

      // 当无数据时返回空数组
      if (
        !this.props.option ||
        !this.props.option.nodeList ||
        this.props.option.nodeList.length <= 0
      ) {
        return [];
      }

      let setting = deepClone(this.props.option);

      setting.viewSetting = Object.assign(
        {},
        this.params.defaultSetting.viewSetting,
        setting.viewSetting
      );

      setting.callBack = Object.assign(
        {},
        this.params.defaultSetting.callBack,
        setting.callBack
      );

      setting.nodeList.forEach(
        (x, index, originalArr) => {
          originalArr[index] = this.nodeSetting(x, null, setting);
          this.getDefaultSetting(originalArr[index], setting);
        }
      );

      return setting;
    }
  }

  // 选中时，处理节点数据
  selectItem(item, eachItem) {
    if (!eachItem) {
      this.selectItem(item, this.state.setting.nodeList);
      this.setState({});
      this.onNodeSelected(item);
    } else {
      eachItem.forEach(x => {
        if (x !== item) {
          x.isSelected = false;
        } else if (!item.isSelected) {
          x.isSelected = true;
        }

        if (!!x.nodeList && x.nodeList.length > 0) {
          this.selectItem(item, x.nodeList);
        }
      });
    }
  }

  // 当用户点击checkbox引发状态改变时的操作
  changeCheckbox(item) {

    this.props.checkboxOperates.changeCheckbox.call(
      this.props.checkboxOperates,
      this.state.setting,
      this.params.noNodeListNodeArr,
      item,
      this.onNodeChecked.bind(this)
    );
    this.setState({});
  }

  // 接收tree-node组件中触发的nodeChecked事件
  onNodeChecked() {
    typeof this.state.setting.callBack.onChecked === "function" &&
    this.state.setting.callBack.onChecked(this.state.setting.nodeList);
  }

  // 接收tree-node组件中触发的nodeSelected事件
  onNodeSelected(item) {
    typeof this.state.setting.callBack.onSelected === "function" &&
    this.state.setting.callBack.onSelected(item);
  }

  render() {

    let children = this.state.setting && this.state.setting.nodeList.length > 0 ?
      <TreeNode
        level={1}
        hasCheckbox={!!this.state.setting.viewSetting.isShowCheckBox}
        isShowComponent={!!this.props.nodeComponent}
        getIsCheckboxSelected={this.props.checkboxOperates.getIsCheckboxSelected}
        isParentLevelTriggerSelected={this.state.setting.viewSetting.isParentLevelTriggerSelected}
        nodeData={this.state.setting.nodeList}
        nodeComponent={this.props.nodeComponent}
        selectItem={this.selectItem.bind(this)}
        changeCheckbox={item => this.changeCheckbox(item)}
      /> :
      <div className="v-tree-noData">
        <span>暂无数据</span>
      </div>;

    return (
      <div className={this.className('v-tree')} style={this.style()}>
        {children}
      </div>
    );
  }
}


Tree.propTypes = {
  option: PropTypes.object,           // 配置对象
  nodeComponent: PropTypes.node,      // 自定义节点展示组件
  checkboxOperates: PropTypes.object, // checkbox操作集合
};

export default Tree;
