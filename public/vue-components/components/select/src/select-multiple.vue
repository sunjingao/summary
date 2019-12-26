<template>

    <div
        class="v-select"
        v-click-outside="clickOutside"
    >
        <div
            class="v-multiple-reference v-hover-show-scrollbar"
            ref="reference"
            @click="clickInputLike"
            :style="{
                width: `${width}px`,
                minHeight: `${minHeight}px`,
                maxHeight: `${maxHeight}px`
            }"
            tabIndex="1"
        >

            <template v-if="showLabel.length > 0">
                <v-tag
                    v-for="(value,index) in showLabel"
                    @close="closeItem($event, index)"
                    :height="minHeight-10-2"
                    :key="index"
                    closeable
                >
                    {{value}}
                </v-tag>
            </template>
            <template v-else>
                <span class="v-self-placeholder" :style="{lineHeight:`${minHeight-10-2}px`}">
                    {{placeholder}}
                </span>
            </template>

            <span class="select-direction">
                <i class="iconfont icon-down" :class="isShowPopper&&'up'"></i>
            </span>
        </div>

        <div
            v-show="isShowPopper"
            ref="popper"
            class="v-popper"
        >

            <ul class="v-popper-content v-hover-show-scrollbar">

                <slot></slot>
            </ul>

            <div class="v-popper-arrow"></div>
        </div>

    </div>
</template>

<script>

  import clickOutside from "../../../src/directives/clickoutside"
  import vTag from "../../tag/index";

  export default {

    name: "v-select-multiple",

    inheritAttrs: false,

    directives: {
      clickOutside
    },

    components: {
      vTag
    },

    props: {

      width: {
        required: false,
        type: Number,
        default: 180
      },
      minHeight: {
        required: false,
        type: Number,
        default: 40
      },
      maxHeight: {
        required: false,
        type: Number,
        default: 200
      },
      value: {
        required: false,
        default: []
      },
      placeholder: {
        required: false,
        default: '请选择'
      },
    },

    data() {
      return {
        isShowPopper: false, // 控制是否应该展示popper
        popperHandler: null, // popper组件实例化后的句柄
        showLabel: [], // 输入框展示的内容
        updateSign: {} // 子组件更新监控标识
      }
    },

    computed: {
      // item 可根据 showValue 判断当前active的值
      showValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        },
      },
    },

    methods: {

      clickOutside(event, sign) {
        if (sign) {
          this.hidePopper();
        }
      },

      // 点击在类似搜索框的位置
      clickInputLike() {

        this.showPopper();
      },

      // 点击某个tag的关闭按钮
      closeItem(event, index) {

        event.stopPropagation();

        // 更新showValue数据
        this.showValue.splice(index, 1);
        // 更新showLabel数据
        this.showLabel = [];
        // 更改子节点监控的数据，触发子节点更新showLabel数据
        this.childrenUpdate();
      },

      triggerClick(value, label, event) {
        this.$emit('click-option', value, label, event)
      },

      // 更改子节点监控的数据，触发子节点更新showLabel数据
      childrenUpdate() {
        this.updateSign = {};
      },

      updatePopper() {
        this.popperHandler.update();
      },

      showPopper() {
        this.isShowPopper = true;
        this.popperHandler.show();
        this.selectedShow();
      },

      hidePopper() {
        this.isShowPopper = false;
        this.popperHandler.hide();
      },

      // 存在选中条目时，要让选中条目处于展示的最下方
      selectedShow() {

        // 当没有赋值的时候
        if (this.showLabel.length === 0) {
          this.$el.querySelector('.v-popper-content').scrollTop = 0;
          return;
        }

        let popper = this.$el.querySelector('.v-popper-content'),
          activeEle = popper.querySelector('.active'),
          activeEleClientRect = activeEle.getBoundingClientRect(),
          popperClientRect = popper.getBoundingClientRect(),
          itemHeight = activeEleClientRect.height,
          index = [].slice.call(popper.children).indexOf(activeEle);

        this.$el.querySelector('.v-popper-content').scrollTop =
          (index + 1) * itemHeight +
          parseFloat(getComputedStyle(popper).getPropertyValue('padding-top')) -
          popperClientRect.height;
      },
    },

    watch: {

      showLabel() {

        // 当出现滚动条的时候，让最下面的tag显示出来
        let showArea = this.$refs.reference;
        showArea.scrollTop = showArea.scrollHeight - showArea.clientHeight;

        // 需要待视图更新后，即输入框大小已经改变完成后再调用update方法
        this.$nextTick(
          _ => {
            this.updatePopper();
          }
        )
      },
    },

    mounted() {

      this.popperHandler = new Popper(
        this.$refs.reference,
        this.$refs.popper,
        {
          updateImmediately: false,
          placement: 'bottom-start',
          modifiers: {
            // 设置输入框和弹层之间的距离
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
