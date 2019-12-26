<template>
    <div class="v-tooltip" ref="reference" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div>
            <slot></slot>
        </div>
        <div v-show="showPopper" ref="popper" class="v-popper" :class="theme">

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

  import '../css/tooltip.scss';

  export default {

    name: "v-tooltip",

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
    },

    data() {
      return {
        popperHandler: null,
        showPopper: false,
      }
    },

    methods: {

      show() {

        this.showPopper = true;
        this.popperHandler.show();
      },

      hide() {

        this.showPopper = false;
        this.popperHandler.hide();
      },

      mouseenter() {
        if (this.disabled) {
          return;
        }
        this.show();
      },

      mouseleave() {
        if (this.disabled) {
          return;
        }
        this.hide();
      },
    },

    watch: {
      disabled(val) {
        if (val) {
          this.hide();
        }
      },
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
