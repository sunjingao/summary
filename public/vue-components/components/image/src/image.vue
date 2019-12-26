<template>
    <div class="v-image">
        <template v-if="isWaiting">
            <template v-if="$slots.alt">
                <div class="alt-part">
                    <slot name="alt"></slot>
                </div>
            </template>
            <template v-else-if="alt">
                <div class="alt-part">{{alt}}</div>
            </template>
        </template>
        <template v-if="isError">
            <template v-if="$slots.error">
                <div class="error-part">
                    <slot name="error"></slot>
                </div>
            </template>
            <template v-else-if="error">
                <div class="error-part">{{error}}</div>
            </template>
        </template>
        <template v-if="isCorrect">
            <img ref="img" class="img-part" :style="{objectFit:fit}"/>
        </template>
    </div>
</template>

<script>

  import '../css/image.scss';
  import {getStyle} from "../../../src/utils/dom"
  import {throttle} from "../../../src/utils/throttleAndDebounce";

  export default {

    name: "v-image",

    props: {
      src: {
        require: false,
        type: String,
        default: ''
      },
      alt: {
        require: false,
        type: String,
        default: ''
      },
      error: {
        require: false,
        type: String,
        default: ''
      },
      fit: {
        require: false,
        type: String,
        validator(val) {
          return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(val);
        },
        default: 'fill'
      },
      lazy: {
        require: false,
        type: Boolean,
        default: false
      },
      scrollContainer: [String, Object],
      updateTimer: {
        require: false,
        type: Number,
        default: 500
      },
      showHeight: {
        require: false,
        type: Number,
        default: 50
      },
    },

    data() {
      return {

        isWaiting: false, // 加载中
        isError: false, // 加载失败
        isCorrect: false, // 加载成功

        scrollParent: null, // 滚动监听元素
        throttleUpdate: null, // 节流更新函数
      }
    },

    methods: {

      initSigns() {
        this.isWaiting = true;
        this.isError = false;
        this.isCorrect = false;
      },

      startDownLoadImg() {

        if (this.isWaiting || this.isError || this.isCorrect) {
          return;
        }

        let element = document.createElement('img');

        element.src = this.src;

        this.initSigns();

        this.bindEvents(element);
      },

      setScrollParent() {

        if (!this.scrollContainer) {

          let rootElements = [document, document.documentElement, document.body],
            scrollAttrs = ['auto', 'scroll'],
            parent = this.$el.parentNode;

          while (
            !scrollAttrs.includes(getStyle(parent, 'overflow')) &&
            !rootElements.includes(parent)
            ) {
            parent = parent.parentNode;
          }

          this.scrollParent = rootElements.includes(parent) ? document : parent;
        } else if (typeof this.scrollContainer === 'string') {
          this.scrollParent = document.querySelector(this.scrollContainer);
        } else {
          this.scrollParent = this.scrollContainer;
        }
      },

      onLoad() {

        this.isCorrect = true;
        this.isWaiting = false;
        this.isError = false;

        this.$nextTick(
          _ => this.$refs.img && this.$refs.img.setAttribute('src', this.src)
        );
      },

      onError() {
        this.isError = true;
        this.isWaiting = false;
        this.isCorrect = false;
      },

      bindEvents(element) {
        element.onload = this.onLoad;
        element.onerror = this.onError;
      },

      bindLazyEvent() {
        this.scrollParent.addEventListener(
          'scroll',
          this.throttleUpdate
        )
      },

      removeLazyEvent() {
        this.scrollParent && this.scrollParent.removeEventListener && this.scrollParent.removeEventListener(
          'scroll',
          this.throttleUpdate
        )
      },

      lazyUpdate() {

        let clientRect = this.scrollParent.getBoundingClientRect();
        let currentEle = this.$el.getBoundingClientRect();
        if (
          currentEle.top - clientRect.bottom <= this.showHeight
        ) {
          this.startDownLoadImg();
        }
      },

      setThrottleUpdate() {
        this.throttleUpdate = throttle(this.lazyUpdate, this.updateTimer);
      },
    },

    created() {

      if (!this.lazy) {
        this.startDownLoadImg();
      }
    },

    mounted() {

      if (this.lazy) {

        this.setScrollParent();

        this.setThrottleUpdate();

        this.bindLazyEvent();

        this.throttleUpdate();
      }
    },

    beforeDestroy() {
      if (this.lazy) {

        this.removeLazyEvent();
      }
    },
  }
</script>
