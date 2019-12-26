<template>
  <span
      v-show="isShow"
      class="v-tag"
      :class="type"
      :style="{
          width: width==='auto' ? 'auto' : `${width}px`,
          height: `${height}px`,
          lineHeight: `${height}px`,
      }"
  >
    <slot></slot>
    <i
        v-if="closeable"
        class="iconfont icon-delete delete"
        @click.stop="close"
    ></i>
  </span>
</template>

<script>

  import '../css/tag.scss';

  export default {

    name: 'v-tag',

    props: {
      type: {
        type: String,
        required: false,
        default: ''
      },
      closeable: {
        type: Boolean,
        required: false,
        default: false
      },
      height: {
        type: Number,
        required: false,
        default: 32
      },
      width: {
        type: [Number, String],
        required: false,
        default: 'auto'
      },
    },

    data() {
      return {
        isShow: true
      }
    },

    methods: {

      close(event) {
        this.hide();
        this.$emit('close', event);
      },

      show() {
        this.isShow = true;
      },

      hide() {
        this.isShow = false;
      },
    }
  }
</script>
