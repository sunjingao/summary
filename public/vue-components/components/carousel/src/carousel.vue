<template>
    <div
        class="v-carousel"
        ref="v-carousel"
        :style="{height:`{height}px`}"
        @mouseenter="isHover=true"
        @mouseleave="isHover=false"
    >
        <div class="content-part">
            <div class="content" ref="content">
                <slot></slot>
            </div>
        </div>
        <div class="arrow-part" v-show="isShowArrow">
            <div class="before" @click="prevClick"><</div>
            <div class="next" @click="nextClick">></div>
        </div>
        <div v-if="indicator !== 'none'" class="indicator-part" :class="indicator">
            <div
                v-for="(item, index) in allItemNums"
                class="item"
                @click="locate(index)"
                @mouseenter="indicatorMouseEnter(index)"
            >
                <i :class="[activeIndex===index&&'is-active']"></i>
            </div>
        </div>
    </div>
</template>

<script>

  import '../css/carousel.scss';

  export default {

    name: 'v-carousel',

    props: {
      initIndex: {
        require: false,
        type: Number,
        default: 0
      },
      height: {
        require: false,
        type: Number,
        default: 300
      },
      trigger: {
        require: false,
        type: String,
        validator(val) {
          return ['click', 'hover'].includes(val);
        },
        default: 'hover'
      },
      autoplay: {
        require: false,
        type: Boolean,
        default: true
      },
      interval: {
        require: false,
        type: Number,
        default: 2000
      },
      transition: {
        require: false,
        type: Number,
        default: 500
      },
      indicator: {
        require: false,
        type: String,
        validator(val) {
          return ['outside', 'inside', 'none'].includes(val);
        },
        default: 'inside'
      },
      arrow: {
        require: false,
        type: String,
        validator(val) {
          return ['always', 'hover', 'never'].includes(val);
        },
        default: 'hover'
      },
    },

    data() {
      return {

        allItemNums: 0, // 索引条目
        activeIndex: this.initIndex, // 本次激活索引
        intervalHandle: null, // 循环句柄
        isHover: false, // 当前是否在hover中

        beforeActiveIndex: -1, // 上一次激活索引
        isMoving: false, // 当前是否在动画中
      }
    },

    computed: {

      isShowArrow() {
        switch (this.arrow) {
          case 'always':
            return true;
          case 'hover':
            return this.isHover;
          case 'never':
            return false;
        }
      },
    },

    methods: {

      prevClick() {
        this.prev();
        this.$emit('prev', this.activeIndex);
      },

      nextClick() {
        this.next();
        this.$emit('next', this.activeIndex);
      },

      initPosition() {

        let children = this.$children;

        children[this.activeIndex].setLeftSize(0);
        children[this.activeIndex].show();
      },

      notAllowMove(index) {
        return this.isMoving || this.beforeActiveIndex === this.activeIndex ||
          (index && index === this.activeIndex);
      },

      move() {

        this.isMoving = true;

        let children = this.$children,
          parentWith = this.$refs['v-carousel'].offsetWidth;

        if (this.beforeActiveIndex < this.activeIndex) {
          children[this.activeIndex].setLeftSize(parentWith);
        } else {
          children[this.activeIndex].setLeftSize(-parentWith);
        }

        window.requestAnimationFrame(
          _ => {

            children[this.activeIndex].show();

            window.requestAnimationFrame(
              _ => {
                if (this.beforeActiveIndex < this.activeIndex) {

                  children[this.beforeActiveIndex].setLeftSize(-parentWith);
                  children[this.activeIndex].setLeftSize(0);
                } else {

                  children[this.beforeActiveIndex].setLeftSize(parentWith);
                  children[this.activeIndex].setLeftSize(0);
                }

                setTimeout(
                  _ => {
                    children && children[this.beforeActiveIndex].hide();
                    this.isMoving = false;
                  },
                  this.transition
                )
              }
            )
          }
        );
      },

      prev() {

        if (this.notAllowMove()) {
          return;
        }

        this.beforeActiveIndex = this.activeIndex;

        this.activeIndex--;

        if (this.activeIndex === -1) {
          this.activeIndex = this.allItemNums - 1;
        }

        this.move();
      },

      next() {

        if (this.notAllowMove()) {
          return;
        }

        this.beforeActiveIndex = this.activeIndex;

        this.activeIndex++;

        if (this.activeIndex === this.allItemNums) {
          this.activeIndex = 0;
        }

        this.move();
      },

      locate(index) {

        if (this.notAllowMove(index)) {
          return;
        }

        this.beforeActiveIndex = this.activeIndex;

        this.activeIndex = index;

        this.$emit('locate', this.activeIndex);

        this.move();
      },

      indicatorMouseEnter(index) {

        if (this.trigger === 'hover') {
          this.locate(index)
        }
      },

      update() {
        this.next();
      },

      bindEvents() {

        this.intervalHandle = setInterval(
          _ => {
            this.update()
          },
          this.interval
        )
      },

      removeEvents() {

        clearInterval(this.intervalHandle);
      },

    },

    watch: {

      isHover(val) {

        if (this.autoplay) {

          this.removeEvents();

          !val && this.bindEvents();
        }
      },
    },

    mounted() {

      this.allItemNums = this.$children.length;

      this.autoplay && this.bindEvents();

      this.initPosition();
    },

    beforeDestroy() {

      this.removeEvents();
    }
  }
</script>
