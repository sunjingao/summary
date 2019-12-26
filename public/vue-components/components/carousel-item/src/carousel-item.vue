<template>
    <div
        class="v-carousel-item"
        v-show="isShow"
        :style="{
            transform: `translateX(${left}px)`,
            transition: `transform ${$parent.transition/1000}s`,
        }"
    >
        <slot></slot>
    </div>
</template>

<script>

  import '../css/carousel-item.scss';

  export default {

    name: "v-carousel-item",

    data() {
      return {
        isShow: false,
        left: '0',
      }
    },

    methods: {

      show() {
        this.isShow = true;
      },

      hide() {
        this.isShow = false;
      },

      setLeftSize(size) {
        this.left = size;
      },
    }
  }
</script>

