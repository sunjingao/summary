<template>

    <div
        class="v-select"
    >

        <v-input
            ref="reference"
            v-bind="$attrs"
            v-model="showLabel"
            v-click-outside="clickOutside"
            @clean="clean"
            @keydown.native.enter="handlerEnter()"
            :placeholder="placeholder"
            :cleanable="cleanable"
            readonly
        >
            <span
                v-show="!this.cleanable || this.cleanable&&!this.showLabel"
                class="select-direction"
            >
                <i class="iconfont icon-down" :class="isShowPopper&&'up'"></i>
            </span>
        </v-input>

        <div
            v-show="isShowPopper"
            ref="popper"
            class="v-popper"
        >

            <ul ref="popper-content" class="v-popper-content v-hover-show-scrollbar">

                <slot></slot>
            </ul>

            <div class="v-popper-arrow"></div>

        </div>

    </div>
</template>

<script>

  import clickOutside from "../../../src/directives/clickoutside"

  export default {

    name: "v-select-single",

    inheritAttrs: false,

    directives: {
      clickOutside
    },

    props: {
      value: {
        required: false,
        default: ''
      },
      placeholder: {
        required: false,
        default: '请选择'
      },
      cleanable: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        isShowPopper: false, // 控制是否应该展示popper
        popperHandler: null, // popper组件实例化后的句柄
        showLabel: '', // 输入框展示的内容
      }
    },

    computed: {
      // item 可根据 showValue 判断当前active的值
      showValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.isShowPopper = false;
          this.$emit('input', val);
        },
      },
    },

    methods: {

      clickOutside(event, sign) {
        sign ? this.hidePopper() : this.showPopper();
      },

      handlerEnter() {
        this.isShowPopper ? this.hidePopper() : this.showPopper();
      },

      clean(event) {
        this.$emit('input', '');
        this.triggerClean(event);
      },

      triggerClean(event) {
        this.$emit('clean', event)
      },

      triggerClick(value, label, event) {
        this.$emit('click-option', value, label, event)
      },

      showPopper() {
        this.popperHandler.show();
        this.isShowPopper = true;
        this.selectedShow();
      },

      hidePopper() {
        this.popperHandler.hide();
        this.isShowPopper = false;
      },

      // 存在选中条目时，要让选中条目处于展示的最下方
      selectedShow() {

        // 当没有赋值的时候
        if (!this.showLabel) {
          this.$refs['popper-content'].scrollTop = 0;
          return;
        }

        let popperContent = this.$refs['popper-content'],
          activeEle = popperContent.querySelector('.active'),
          popperClientRect = popperContent.getBoundingClientRect(),
          itemHeight = activeEle.getBoundingClientRect().height,
          index = [].slice.call(popperContent.children).indexOf(activeEle);

        popperContent.scrollTop =
          (index + 1) * itemHeight +
          parseFloat(getComputedStyle(popperContent).getPropertyValue('padding-top')) -
          popperClientRect.height;
      },
    },

    mounted() {

      this.popperHandler = new Popper(
        this.$refs.reference.$el,
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
