<template>
    <button
        class="v-button"
        @click="click"
        :class="[
            type + 'Btn' ,
            plain ? 'isPlain' : '' ,
            round ? 'isRound' : '',
            isDisabled ? 'disabled' : '',
        ]"
        :style="{
            'width': width ? width + 'px' : 'auto',
            'height': height ? height + 'px' : 'auto'
         }"
        :disabled="isDisabled"
    >
        <span>
            <i class="iconfont icon-loading" v-show="loading"></i>
        </span>
        <slot></slot>
    </button>
</template>

<script>

  import '../css/button.scss';

  export default {

    name: 'v-button',

    props: {

      width: {
        required: false,
        type: Number
      },

      height: {
        required: false,
        type: Number
      },

      type: {
        required: false,
        type: String,
        default: "default"
      },

      plain: {
        required: false,
        type: Boolean,
        default: false
      },

      round: {
        required: false,
        type: Boolean,
        default: false
      },

      disabled: {
        required: false,
        type: Boolean,
        default: false
      },

      loading: {
        required: false,
        type: Boolean,
        default: false
      }
    },

    data() {
      return {}
    },

    computed: {
      isDisabled() {
        return this.disabled || this.loading;
      }
    },

    methods: {
      click: function () {
        this.$emit("click");
      }
    },
  }
</script>
