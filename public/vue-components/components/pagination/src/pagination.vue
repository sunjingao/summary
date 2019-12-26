<template>
    <div class="v-pagination">

        <div
            v-show="showController.prev"
            class="prev"
            @click="move(stepSettings.leftStep)"
            :class="[
                isDisabled('left') ? 'disabled' : '',
                settings.isButton && 'btns'
            ]"
        >
            <
        </div>

        <ul v-show="showController.content" class="content">
            <li
                v-for="item in settings.itemArrays"
                :class="[item.selected ? 'selected' : '', settings.isButton && 'btns'] "
            >
                <div v-if="item.value === 'left'" @click="move(stepSettings.leftSteps)" class="leftIcon"></div>
                <div v-else-if="item.value === 'right'" @click="move(stepSettings.rightSteps)" class="rightIcon"></div>
                <div v-else class="v-value-content" @click="changeSelect(item)"
                >
                    {{item.value + 1}}
                </div>
            </li>
        </ul>

        <div
            v-show="showController.next"
            class="next"
            :class="[isDisabled('right') ? 'disabled' : '']"
            @click="move(stepSettings.rightStep)"
        >
            >
        </div>

        <v-select
            v-show="showController.sizes"
            v-model="settings.pageSizeSelectedValue"
            :width="componentsSize.select.width"
            :height="componentsSize.select.height"
            @click-option="selectChange"
            class="sizes">
            <v-option
                v-for="(item,key) in settings.pageSizeOption"
                :key="key"
                :label="item.label"
                :disabled="item.disabled"
                :value="item.value">
            </v-option>
        </v-select>

        <v-input
            v-show="showController.jumper"
            v-model="currentShowPage"
            class="jumper"
            :width="componentsSize.input.width"
            :height="componentsSize.input.height"
            @blur="changeCurrentPage"
            @keyup.native.enter="changeCurrentPage"
        ></v-input>

        <span v-show="showController.total" class="total">共{{settings.total}}条</span>
    </div>
</template>

<script>

  import '../css/pagination.scss';
  import deepClone from "../../../src/utils/deepClone.js"
  import initItemArray from "./mixins/initItemArrays"

  export default {

    name: 'v-pagination',

    mixins: [initItemArray],

    props: {
      options: {
        required: true,
        type: Object
      }
    },

    data() {

      return {

        // 当前展示的页数
        currentShowPage: '',

        // 当前组件使用的页面配置
        settings: {
          totalPageNum: 0, // 总页面数
          itemArrays: [], // 要展示的内容数组
        },

        // 展示控制
        showController: {
          prev: false,
          content: false,
          next: false,
          sizes: false,
          jumper: false,
          total: false,
        },

        // 使用组件的大小设置
        componentsSize: {
          select: {
            width: 70,
            height: 30,
          },
          input: {
            width: 70,
            height: 30,
          },
        },

        // 点击向左或向右的每步幅度配置
        stepSettings: {
          leftStep: -1, // 点击向左，每步的幅度
          rightStep: 1, // 点击向右，每步的幅度
          leftSteps: -5, // 点击快速向左，每步的幅度
          rightSteps: 5, // 点击快速向右，每步的幅度
        },

        // 默认配置
        defaultSettings: {

          // ['prev', 'content', 'next', 'sizes', 'jumper','total'],  所有组件
          layout: ['prev', 'content', 'next'], // 组件排列顺序
          isButton: false, // 是否展示button样式
          total: 0, // 总条数
          currentPage: 0, // 当前页数
          pageSizeSelectedValue: 10, // 默认选中条数
          // 每页条数控制
          pageSizeOption: [
            {value: 10, label: 10},
            {value: 20, label: 20},
            {value: 30, label: 30}
          ]
        },
      }
    },

    methods: {

      // 下拉框改变时的操作
      selectChange() {

        this.settings.currentPage = 0;

        this.setTotalPageNum();

        this.initItemArrays();

        this.emitPageChange();

        this.emitSelectChange();
      },

      // 当输入框发生失去焦点或回车事件时，触发
      changeCurrentPage() {

        this.settings.currentPage = this.currentShowPage - 1;

        this.initItemArrays();

        this.emitPageChange();
      },

      // 下拉框改变时触发
      emitSelectChange() {
        this.$emit("select-change", this.settings.pageSizeSelectedValue);
      },

      // page页面改变时触发
      emitPageChange() {
        this.$emit("page-change", this.settings.currentPage);
      },

      // 判断左右两个改变选中内容的图标是否禁止操作
      isDisabled(direction) {

        if (!!this.settings.totalPageNum) {
          if (direction === 'left') {
            return this.settings.itemArrays.filter(x => x.selected)[0].value === 0;
          }
          else {
            return this.settings.itemArrays.filter(x => x.selected)[0].value === this.settings.totalPageNum - 1;
          }
        }
      },

      // 移动元素
      move(step) {

        if (
          this.settings.totalPageNum <= 0 ||
          (this.settings.currentPage === 0 && step < 0) ||
          (this.settings.currentPage === this.settings.total - 1 && step > 0)
        ) {
          return;
        }

        this.settings.currentPage += step;
        this.initItemArrays();
        this.emitPageChange();
      },

      // 点击某个元素时的操作
      changeSelect(item) {
        this.settings.currentPage = item.value;
        this.initItemArrays();
        this.emitPageChange();
      },

      // 设置总页数
      setTotalPageNum() {
        this.settings.totalPageNum =
          Math.ceil(this.settings.total / this.settings.pageSizeSelectedValue);
      },

      // 初始化
      initSettings() {

        this.settings = deepClone(
          Object.assign(
            {},
            this.defaultSettings,
            this.settings,
            this.options
          )
        );

        this.setTotalPageNum();

        this.initItemArrays();
      },

      // 初始化各个dom的位置
      initPlacement() {

        let layout = this.settings.layout,
          parent = this.$el;

        for (let value of Object.values(layout)) {

          let element = this.$el.getElementsByClassName(value)[0];
          parent.appendChild(element);

          this.showController[value] = true;
        }
      },
    },

    watch: {
      'settings.currentPage'(val) {
        this.currentShowPage = Number(val) + 1;
      },
    },

    created() {

      this.initSettings();
    },

    mounted() {
      this.initPlacement()
    },
  }
</script>
