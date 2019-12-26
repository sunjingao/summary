<template>
    <div class="v-tree">
        <div v-if="setting.nodeList.length > 0">
            <tree-node
                :node-data="setting.nodeList"
                :setting="setting"
                @node-check="nodeChecked(item)"
                @node-selected="nodeSelected(item)"
                :level="1"
            ></tree-node>
        </div>
        <div v-else class="v-tree-noData">
            <span>暂无数据</span>
        </div>
    </div>
</template>

<script>

  import '../css/tree.scss';
  import treeNode from "./tree-node.vue"
  import deepClone from "../../../src/utils/deepClone"
  import checkboxOperate from "./mixins/checkbox-operate"

  export default {

    name: 'v-tree',

    mixins: [checkboxOperate],

    components: {
      treeNode: treeNode
    },

    props: {
      option: {
        required: true,
        type: Object,
      }
    },


    data() {
      return {

        setting: null, // 树配置

        defaultSetting: {
          callBack: {
            onChecked: null, // 多选框被选中前触发
            onSelected: null, // 标签被选中
          },
          viewSetting: {
            componentName: '', // 自定义组件名称
            showCheckBox: false, // 是否展示多选
            checkedAll: false, // 是否全部选中
            expandAll: false, // 是否展开全部
            parentLevelTriggerSelected: false, // 含有子节点的节点点击文字会触发事件
          },
          nodeSetting: {

            key: "", // 每个node的key
            value: "", // 每个node显示的值
            nodeList: [], // 子节点列表
            disabled: false, // 禁止选中
            selected: false, // 是否被选中
            checked: "", // 多选框是否默认选中
            expandNode: false, // 是否展开子节点

            parent: null, // 父节点指针
            isParent: false, // 是否有子元素，有则显示展开或搜索图标
            // 被选中的状态
            // 0：自己及子元素都没被选中，
            // 1：除disabled为true的节点外，子节点非全选（一种情况是全部选，另一种情况是选了一部分），
            // 2：除disabled为true的节点外，子节点全选，
            // 3：自己及子元素全被选中
            checkboxType: 0,
          },
        }
      }
    },

    methods: {

      // 对node节点的属性进行初始化设置，
      nodeSetting(node, parentNode) {

        node.parent = parentNode;
        if (!node.hasOwnProperty('expandNode') && this.setting.viewSetting && this.setting.viewSetting.expandAll) {
          node.expandNode = true;
        }
        if (typeof node.isParent === "undefined") {
          node.isParent = !!node.nodeList && node.nodeList.length > 0;
        }
        node = Object.assign({}, this.defaultSetting.nodeSetting, node);

        return node
      },

      // 初始化setting的nodeList
      getSetting(node) {

        if (node) {
          node.nodeList && node.nodeList.forEach((x, index, originalArr) => {
            this.getSetting(this.$set(originalArr, index, this.nodeSetting(x, node)));
          });
        } else {

          // 当无数据时返回空数组
          if (!this.option || !this.option.nodeList || this.option.nodeList.length <= 0) {
            return this.setting = [];
          }

          this.setting = deepClone(this.option);
          this.setting.viewSetting = Object.assign(
            {},
            this.defaultSetting.viewSetting,
            !!this.option.viewSetting ? this.option.viewSetting : {}
          );

          this.setting.callBack = Object.assign(
            {},
            this.defaultSetting.callBack,
            !!this.option.callBack ? this.option.callBack : null
          );

          this.setting.nodeList.forEach(
            (x, index, originalArr) => {
              this.getSetting(this.$set(originalArr, index, this.nodeSetting(x, null)));
            }
          );
        }
      },

      // 接收tree-node组件中触发的nodeChecked事件
      nodeChecked(item) {
        typeof this.setting.callBack.onChecked === "function" &&
        this.setting.callBack.onChecked(item);
      },

      // 接收tree-node组件中触发的nodeSelected事件
      nodeSelected(item) {
        typeof this.setting.callBack.onSelected === "function" &&
        this.setting.callBack.onSelected(item);
      },

    },

    watch: {
      option: {
        deep: true,
        handler: function () {
          this.getSetting();
        },
      }
    },

    created() {

      this.getSetting();
      this.initCheckboxType();
    },
  }
</script>
