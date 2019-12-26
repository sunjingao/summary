<template>
    <div
        v-show="isShow"
        class="v-backtop"
        @click="triggerUp"
        :style="{
            right: right+'px',
            bottom: bottom+'px',
            zIndex: zIndex,
        }"
    >
        <template v-if="$slots.default">
            <slot></slot>
        </template>
        <template v-else>
            <i class="iconfont icon-scroll-top"></i>
        </template>
    </div>
</template>

<script>

  import '../css/backtop.scss';
  import {throttle} from "../../../src/utils/throttleAndDebounce";

  export default {

    name: "v-backtop",

    props: {

      selector: {
        require: false,
        type: String,
        default: 'root'
      },

      visibilityHeight: {
        require: false,
        type: Number,
        default: 200
      },

      right: {
        require: false,
        type: Number,
        default: 40
      },

      bottom: {
        require: false,
        type: Number,
        default: 40
      },

      timeout: {
        require: false,
        type: Number,
        default: 500
      },
    },

    data() {
      return {
        isShow: false,
        rootElement: null,
        throttleUpdate: null,
        zIndex: 1,
      }
    },

    computed: {
      isRoot() {
        return this.selector.trim() === 'root';
      }
    },

    methods: {

      scroll() {
        requestAnimationFrame(
          _ => {
            let scrollTop = this.rootElement.scrollTop;
            this.rootElement.scrollTop = scrollTop / 2;
            if (scrollTop <= 1) {
              this.rootElement.scrollTop = 0;
            }
            else {
              this.scroll();
            }
          }
        )
      },

      triggerUp(event) {

        this.scroll();

        this.$emit('click', event);
      },

      show() {

        if (this.isShow) {
          return;
        }

        this.zIndex = Popper.addZIndex();

        this.isShow = true;
      },

      hide() {

        if (!this.isShow) {
          return;
        }

        this.isShow = false;
      },

      setUpdater() {
        this.throttleUpdate = throttle(this.update, this.timeout);
      },

      update() {

        this.rootElement.scrollTop > this.visibilityHeight ? this.show() : this.hide();
      },

      bindEvents() {

        (this.isRoot ? window : this.rootElement).addEventListener('scroll', this.throttleUpdate);
      },

      removeEvents() {

        (this.isRoot ? window : this.rootElement).removeEventListener('scroll', this.throttleUpdate);
      },

    },

    created() {

      this.setUpdater();
    },

    mounted() {

      let rootElement = this.isRoot ? document.documentElement : document.querySelector(this.selector);

      this.rootElement = Array.isArray(rootElement) ? rootElement[0] : rootElement;

      this.bindEvents();

      this.update();
    },

    beforeDestroy() {
      this.removeEvents();
    }
  }
</script>
