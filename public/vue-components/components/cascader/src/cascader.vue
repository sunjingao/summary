<template>
    <div
        class="v-cascader"
        v-click-outside="clickOutside">

        <v-input
            ref="cascader_input"
            readonly
            :placeholder="placeholder"
            :value="showValue"
            :width="width"
            :height="height"
            :cleanable="cleanable"
            :title="showValue"
            @clean="clean"
        >
            <span
                v-show="!this.cleanable || this.cleanable&&!this.showValue"
                class="select-direction"
            >
                <i class="iconfont icon-down" :class="isShowPopper&&'up'"></i>
            </span>
        </v-input>

        <div v-show="isShowPopper" class="v-popper" ref="popper">
            <div class="v-panel v-popper-content">
                <v-cascadedr-auto
                    v-for="(item,index) in itemsArray"
                    :key="index"
                    :item="item"
                    :index="index"
                    :itemWidth="itemWidth"
                    :popperMaxHeight="popperMaxHeight"
                    :itemHeight="itemHeight"
                    :hoverTrigger="hoverTrigger"
                    :injectComponentName="injectComponentName"
                    :style="{
                        marginLeft: (index > 0 ? -1: 0) + 'px'
                     }"
                    @cascaderSelected="cascaderSelected"
                    @cascaderOver="cascaderOver"
                >
                </v-cascadedr-auto>
            </div>

            <div class="v-popper-arrow"></div>
        </div>
    </div>
</template>

<script>

  import Vue from 'vue'
  import '../css/cascader.scss';
  import deepClone from "../../../src/utils/deepClone.js"
  import clickOutside from "../../../src/directives/clickoutside"
  import vCascadedrAuto from './cascadedr-auto.vue'

  export default {

    name: 'v-cascader',

    directives: {
      'clickOutside': clickOutside
    },

    components: {
      vCascadedrAuto
    },

    props: {

      // 说明：提示框数据内容
      tipsArray: {
        required: false,
        type: Array,
        default: function () {
          return [];
        }
      },
      // 说明：input宽度
      width: {
        required: false,
        type: Number,
        default: 170
      },
      // 说明：input高度
      height: {
        required: false,
        type: Number,
        default: 40
      },
      // 说明：input默认展示文字
      placeholder: {
        required: false,
        type: String,
        default: '请选择'
      },
      // 说明：input是否清空输入框
      cleanable: {
        required: false,
        type: Boolean,
        default: false
      },
      // 注入自动提示组件中每条信息展示区域的组件名
      injectComponentName: {
        required: false,
        type: String
      },
      // 提示框是否显示全部级别
      showAllLevels: {
        required: false,
        type: Boolean,
        default: true
      },
      // hover 触发
      hoverTrigger: {
        required: false,
        type: Boolean,
        default: false
      },
      // 自动提示组件的高度
      popperMaxHeight: {
        required: false,
        type: Number,
        default: 210
      },
      // 自动提示组件中每条数据的宽度
      itemWidth: {
        required: false,
        type: Number,
        default: 150
      },
      // 自动提示组件中每条数据的高度
      itemHeight: {
        required: false,
        type: Number,
        default: 30
      },
    },

    data() {
      return {
        // input 展示的内容
        showValue: '',
        // 提供给auto组件的tip数组内容
        itemsArray: [],
        // 上次选中的内容，本次选中时清掉上次选中的痕迹
        lastSelectedArray: [],

        isShowPopper: false, // 当前是否展示popper
        popperHandler: null, // popper 句柄
        reference: null, // 依赖元素
        popper: null, // popper 元素
      }
    },

    methods: {

      clickOutside(event, sign) {
        sign ? this.hidePopper() : this.showPopper();
      },

      // 清除input框中的内容
      clean() {
        this.$emit('autoSelected', {});
        this.initData();
      },

      // 处理 showValue
      handlerShowValue(val) {

        let selectedArray = [];

        for (let item of Object.values(val)) {
          for (let value of Object.values(item)) {
            if (value.selected) {
              selectedArray.push(value);
            }
          }
        }

        if (this.showAllLevels) {
          this.showValue = selectedArray.map(item => item.label).join(' / ');
        } else {
          let lastChild = selectedArray[selectedArray.length - 1];
          if (lastChild && (!lastChild.children || lastChild.children.length === 0)) {
            this.showValue = lastChild.label;
          }
        }
      },

      // 获得当前选中内容的集合
      getCurrentSelected() {
        let selectedArray = [], itemsArray = this.itemsArray;

        for (let item of Object.values(itemsArray)) {
          for (let value of Object.values(item)) {
            if (value.selected) {
              selectedArray.push(value);
            }
          }
        }
        return selectedArray;
      },

      // 设置当前选中内容的集合
      setLastSelected() {

        let selectedArray = [], itemsArray = this.itemsArray;

        for (let item of Object.values(itemsArray)) {
          for (let value of Object.values(item)) {
            if (value.selected) {
              selectedArray.push(value);
            }
          }
        }
        this.lastSelectedArray = selectedArray;
      },

      // 初始化被选中的数组集合,用于渲染展示
      initItemsArray() {

        let itemsArray = [deepClone(this.tipsArray)], item = itemsArray && itemsArray[0];

        let index = -1;
        while (
          item && (index = item.findIndex(obj => obj.selected)) !== -1
          ) {
          let children = item[index].children;
          if (children) {
            children && itemsArray.push(
              item = (item[index].children)
            );
          }
          else {
            break;
          }
        }

        this.itemsArray = itemsArray;
      },

      // 因为上一次可能是在同一级操作的所以要先将最后一组的selected全部置为false，排除掉这种情况
      clearItemSelected(itemArray) {

        for (let value of Object.values(itemArray)) {
          Vue.set(value, 'selected', false);
        }
      },

      // 当被选中时，有over属性代表选中，所以j将over属性为true的item，设置其selected属性为true
      setSelected(itemArray, item) {

        Vue.set(item, 'selected', true);

        for (let item of Object.values(itemArray)) {

          let hasOver = item.some(val => val.over);

          for (let value of Object.values(item)) {
            hasOver && Vue.set(value, 'selected', !!value.over);
          }
        }
      },

      // 删除掉over属性
      cleanOver(itemArray) {
        for (let index = 0; index < itemArray.length; index++) {
          for (let value of Object.values(itemArray[index])) {
            Vue.set(value, 'over', false);
          }
        }
      },

      // 将被选中的item原样传递上去
      emitSelected(item) {

        if (item.children && item.children.length > 0) {
          return;
        }

        let itemsArray = this.itemsArray[0], tipsArray = this.tipsArray, selectedTemp = {}, selectedObj = {};

        while (true) {

          for (let [key, value] of Object.entries(itemsArray)) {
            if (value.selected) {
              selectedTemp = itemsArray[key];
              selectedObj = tipsArray[key];
              break;
            }
          }
          if (selectedTemp.children && selectedTemp.children.length > 0) {
            itemsArray = selectedTemp.children;
            tipsArray = selectedObj.children;
          } else {
            break;
          }
        }
        this.$emit('autoSelected', selectedObj);
      },

      // 选中
      cascaderSelected(item) {

        let index = this.itemsArray.length;

        this.clearItemSelected(this.itemsArray[index - 1]);

        this.setSelected(this.itemsArray, item);

        this.cleanOver(this.itemsArray);

        this.emitSelected(item);

        this.clearOthersSelected();

        this.setLastSelected();

        (!item.children || item.children.length === 0) && this.handlerShowValue(this.itemsArray);

        // 待 clickoutside 触发后再关闭浮层
        setTimeout(
          _ => this.hidePopper()
        )
      },

      // 清除上一步留下的selected痕迹
      clearOthersSelected() {

        let lastSelectedArray = this.lastSelectedArray, currentSelectedArray = this.getCurrentSelected();

        for (let value of Object.values(lastSelectedArray)) {
          if (!currentSelectedArray.includes(value)) {
            Vue.set(value, 'selected', false);
          }
        }
      },

      // 将上一次被选中的item的selected置为false
      clearItemOver(itemArray) {

        for (let index = 0; index < itemArray.length; index++) {
          for (let value of Object.values(itemArray[index])) {
            Vue.set(value, 'over', false);
          }
        }
      },

      // over后，设置itemsArray集合
      setOverArray(itemsArray, item) {

        Vue.set(item, 'over', true);

        // 添加展示内容
        itemsArray.push(item.children);
        this.itemsArray = itemsArray;
      },

      // 处理over事件
      cascaderOver(item, itemIndex) {

        this.clearItemOver(this.itemsArray.slice(itemIndex));

        this.setOverArray(this.itemsArray.slice(0, itemIndex + 1), item);

        // 当自身内容改变时，可能要触发位置的改变
        this.$nextTick(_ => this.popperHandler.update());
      },

      // 初始化数据
      initData() {

        this.initItemsArray();

        this.setLastSelected();

        this.handlerShowValue(this.itemsArray);
      },

      showPopper() {

        if (this.isShowPopper) {
          return;
        }

        this.isShowPopper = true;
        this.popperHandler.show();
      },

      hidePopper() {

        if (!this.isShowPopper) {
          return;
        }

        this.isShowPopper = false;
        this.popperHandler.hide();
      },
    },

    created() {

      this.initData();
    },

    mounted() {

      this.reference = this.$refs['cascader_input'].$el;
      this.popper = this.$refs['popper'];

      this.popperHandler = new Popper(
        this.reference,
        this.popper,
        {
          updateImmediately: false,
          placement: 'bottom-start',
          modifiers: {
            offset: {
              offset: [0, 10]
            }
          }
        }
      );
    },

    beforeDestroy() {
      this.popperHandler.destroy();
    },
  }
</script>
