<template>
    <div class="v-tree-node">
        <ul v-for="(item, index) in node" class="v-tree-ul">
            <li
                v-if="!showComponent"
                :class="[
                     'v-tree-li',
                     item.selected ? 'selected' : '',
                     item.disabled ? 'disabled' : '',
                 ]"
                @click.stop="clickBlank(item, index)"
                :style="{paddingLeft:level*20+'px'}"
            >
                <i
                    v-if="item.isParent" class="iconfont icon-down v-icon-direction"
                    :style="{left:(level*20-16-2)+'px'}"
                    :class="!item.expandNode&&'v-parent-not-expand'"
                ></i>
                <v-checkbox
                    v-if="showCheckbox"
                    :value="getCheckboxShow(item)"
                    :isIndeterminate="item.checkboxType===1 || item.checkboxType===2"
                    @click.native.stop
                    @input="checkChange(item)"
                    @part-check-change="checkChange(item)"
                ></v-checkbox>
                <a :class="['a-link']" @click.stop="clickWords(item)">{{item.value}}</a>
            </li>
            <!--自定义展示模板-->
            <template v-else>
                <component
                    :is="showComponent"
                    :index="index"
                    :level="level"
                    :nodeData="nodeData"
                    :setting="setting"
                    :item="item"
                    :style="{paddingLeft:level*20+'px'}"
                    :class="[
                         'v-tree-li',
                         item.selected ? 'selected' : '',
                         item.disabled ? 'disabled' : '',
                    ]"
                    @click-blank="clickBlank(item, index)"
                    @click-words="clickWords(item)"
                    @input="checkChange(item)"
                    @part-check-change="checkChange(item)"
                ></component>
            </template>
            <!--递归展示子节点-->
            <template v-if="item.nodeList && item.nodeList.length > 0 && item.isParent && item.expandNode">
                <tree-node :level="level+1" :node-data="item.nodeList" :setting="setting">
                </tree-node>
            </template>
        </ul>
    </div>
</template>

<script>

  import '../css/tree-node.scss';
  import emitter from "../../../src/mixins/emitter"
  import checkboxOperate from "./mixins/checkbox-operate"

  export default {

    name: 'tree-node',

    mixins: [emitter, checkboxOperate],

    props: {
      level: {},
      nodeData: {
        required: true,
        type: Array,
      },
      setting: {
        required: true,
        type: Object,
      }
    },

    data() {
      return {
        parentName: 'v-tree',
        node: this.getNodeData()
      }
    },

    computed: {

      showCheckbox() {
        return this.setting.viewSetting && this.setting.viewSetting.showCheckBox === true;
      },
      showComponent() {
        return this.setting.viewSetting && this.setting.viewSetting.componentName;
      },
    },

    methods: {

      getCheckboxShow(item) {
        return item.checkboxType === 3;
      },

      // 为node赋值
      getNodeData() {
        return this.node = this.nodeData;
      },

      // 选中节点时触发
      itemSelected(item, eachItem) {
        if (!eachItem) {
          this.itemSelected(item, this.setting.nodeList);
        } else {
          eachItem.forEach((x) => {
            if (x !== item) {
              x.selected = false;
            } else if (!item.selected) {
              x.selected = true;
            }

            if (!!x.nodeList && x.nodeList.length > 0) {
              this.itemSelected(item, x.nodeList);
            }
          })
        }
      },

      // 点击文字时触发的事件
      clickWords(item) {

        if (item.disabled) {
          return;
        }

        if (item.isParent && !this.setting.viewSetting.parentLevelTriggerSelected) {
          item.expandNode = !item.expandNode;
          return;
        }

        this.itemSelected(item);
        this.dispatch(this.parentName, "nodeSelected", [item]);
      },

      // 点击空白处触发的事件
      clickBlank(item) {

        if (item.disabled) {
          return;
        }

        if (item.isParent) {
          item.expandNode = !item.expandNode;
        } else {
          this.clickWords(item);
        }
      },

      // 点击check多选框时改变状态
      checkChange(item) {
        if (item.disabled) {
          return;
        }
        this.changeCheckbox(item);
        this.dispatch(this.parentName, "nodeChecked", [item]);
      },

    },

    watch: {
      "nodeData": function () {
        this.getNodeData();
      }
    },
  }
</script>
