<template>
    <div
        class="v-dropdown"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        v-click-outside="clickOutside"
    >
        <div ref="reference" @click="referenceClick" class="reference">
            <v-button-group v-if="splitButton">
                <v-button v-bind="$attrs" @click.native.stop="functionalClick">
                    <slot></slot>
                </v-button>
                <v-button v-bind="$attrs" class="split-right-button">
                    <i class="iconfont icon-down"></i>
                </v-button>
            </v-button-group>
            <slot v-else></slot>
        </div>
        <div ref="popper" class="v-popper">
            <slot name="dropdown" class="v-popper-content"></slot>
            <div class="v-popper-arrow"></div>
        </div>
    </div>
</template>

<script>

  import '../css/dropdown.scss';
  import clickOutside from "../../../src/directives/clickoutside"

  export default {

    name: "v-dropdown",

    inheritAttrs: false,

    directives: {
      clickOutside
    },

    props: {
      splitButton: {
        require: false,
        type: Boolean,
        default: false
      },
      hoverTrigger: {
        require: false,
        type: Boolean,
        default: false
      },
      hideOnClick: {
        require: false,
        type: Boolean,
        default: true
      },
      placement: {
        require: false,
        type: String,
        default: 'bottom-end'
      },
    },

    data() {
      return {
        popperHandler: null, // popper实例
        isShowPopper: false, // 当前是否在展示popper
        // 因为下拉框和展示部分之间有一段距离，需要用延时来实现下拉框不隐藏的效果
        hideTimer: null,
        hideTimeout: 200,
      }
    },

    methods: {

      clickOutside(event, sign) {

        if (!sign || this.hoverTrigger || !this.hideOnClick) {
          return;
        }
        this.hidePopper();
      },

      referenceClick() {

        if (this.hoverTrigger) {
          return;
        }

        if (this.hideOnClick) {
          this.toggle();
        } else {
          this.showPopper();
        }
      },

      functionalClick(event) {
        this.$emit('click', event);
      },

      mouseEnter() {

        if (!this.hoverTrigger) {
          return;
        }

        clearTimeout(this.hideTimer);

        this.showPopper();
      },

      mouseLeave() {

        if (!this.hoverTrigger) {
          return;
        }

        this.hideTimer = setTimeout(
          _ => {
            this.hidePopper();
          },
          this.hideTimeout
        );

      },

      showPopper() {
        this.popperHandler.show();
        this.isShowPopper = true;
      },

      hidePopper() {
        this.popperHandler.hide();
        this.isShowPopper = false;
      },

      toggle() {
        this.isShowPopper ? this.hidePopper() : this.showPopper();
      },

      // dropdown-item触发了点击事件
      command(val, event) {

        this.$emit('command', val, event);

        if (this.hideOnClick) {
          this.hidePopper();
        }
      },
    },

    mounted() {

      this.popperHandler = new Popper(
        this.$refs.reference,
        this.$refs.popper,
        {
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
