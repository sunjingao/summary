<template>
  <span
      class="v-radio"
      @click="toggle"
      :class="{
          'outBorder': outBorder,
          'disabled': isDisabled,
          'checked': isCheckedValue
      }"
  >
      <i class="v-radio-icon"></i>
      <span class="v-radio-content"> {{label}} </span>
  </span>
</template>

<script>

  import '../css/radio.scss';

  export default {

    name: 'v-radio',

    props: {
      value: {
        required: true,
        type: String
      },
      label: {
        required: true,
        type: String
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
    },

    data() {
      return {}
    },

    computed: {
      isCheckedValue() {
        return this.$parent.value === this.value;
      },
      outBorder() {
        return this.$parent.$props.outBorder;
      },
      isDisabled() {
        return this.$parent.$props.disabled || this.disabled;
      }
    },

    methods: {
      toggle: function () {
        if (this.isDisabled) {
          return;
        }
        if (this.value !== this.$parent.value) {
          this.$parent.$emit("input", this.value);
        }
      }
    }
  }
</script>
