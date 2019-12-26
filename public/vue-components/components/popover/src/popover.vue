<template>
    <div
        class="v-popover"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
        @mousedown="mousedown"
        @mouseup="mouseup"
        @click="click"
        v-click-outside="clickOutside"
        ref="reference"
    >
        <slot></slot>
        <div ref="popper" v-show="isShow" class="v-popper" :class="theme" @click.stop>

            <div class="v-popper-content">

                <template v-if="$slots.popper">
                    <slot name="popper"></slot>
                </template>
                <template v-else>{{content}}</template>
            </div>

            <div class="v-popper-arrow"></div>
        </div>
    </div>
</template>

<script>

  import '../css/popover.scss';
  import clickOutside from "../../../src/directives/clickoutside"

  export default {

    name: "v-popover",

    directives: {
      'clickOutside': clickOutside
    },

    props: {
      placement: {
        require: false,
        type: String,
        default: 'bottom'
      },
      content: {
        require: false,
        type: String,
        default: ''
      },
      theme: {
        require: false,
        type: String,
        validator(val) {
          return ['dark', 'light'].includes(val);
        },
        default: 'light'
      },
      disabled: {
        require: false,
        type: Boolean,
        default: false,
      },
      offset: {
        require: false,
        type: Number,
        default: 10,
      },
      // hover、focus、click、manual
      trigger: {
        require: false,
        type: String,
        validator(val) {
          return ['hover', 'focus', 'click', 'manual'].includes(val);
        },
        default: 'hover',
      },
    },

    data() {
      return {
        // popper是否正在展示，初始化后，popper会自动展示，所以这里为true
        isShow: false,
        popperHandler: null,
        // 所有的事件
        triggerType: {hover: 'hover', focus: 'focus', click: 'click', manual: 'manual'},
        // 关闭延时
        hideTimeout: 200,
        // 关闭句柄
        hideTimer: null,
      }
    },

    methods: {

      show() {

        clearTimeout(this.hideTimer);

        if (this.disabled || this.isShow) {
          return;
        }

        this.isShow = true;
        this.popperHandler.show();
      },

      hide() {

        if (this.disabled || !this.isShow) {
          return;
        }

        this.hideTimer = setTimeout(
          _ => {
            this.isShow = false;
            this.popperHandler.hide();
          },
          this.hideTimeout
        );
      },

      mouseenter() {

        if (this.trigger !== this.triggerType.hover) {
          return;
        }

        this.show();
      },

      mouseleave() {

        if (this.trigger !== this.triggerType.hover) {
          return;
        }

        this.hide();
      },

      mousedown() {

        if (this.trigger !== this.triggerType.focus) {
          return;
        }
        this.show();
      },

      mouseup() {

        if (this.trigger !== this.triggerType.focus) {
          return;
        }
        this.hide();
      },

      click() {

        if (!['click', 'manual'].includes(this.trigger)) {
          return;
        }

        this.isShow ? this.hide() : this.show();
      },

      clickOutside(event, sign) {

        if (this.trigger !== this.triggerType.click) {
          return;
        }

        if (sign) {
          this.hide();
        }
      },
    },

    watch: {
      disabled(val) {
        if (val) {
          this.hide();
        }
      }
    },

    mounted() {

      this.popperHandler = new Popper(
        this.$refs.reference,
        this.$refs.popper,
        {
          updateImmediately: false,
          placement: this.placement,
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



